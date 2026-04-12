# garmin-connect — CLAUDE.md

## Build & development

```bash
npm install
npm run build:windows    # Windows (tsc --build --clean && tsc)
npm run build            # Linux/Mac
npm run build:watch      # Watch mode
```

TypeScript output goes to `dist/`. The `prepack` script runs build automatically before `npm publish`.

## Architecture

```
src/
├── index.ts                    # Public exports
├── utils.ts                    # File system helpers
├── common/
│   └── HttpClient.ts           # Axios-based HTTP client, OAuth1/2, login, MFA
└── garmin/
    ├── GarminConnect.ts        # Main client class — all public API methods
    ├── UrlClass.ts             # All Garmin Connect API endpoint URLs
    ├── common/
    │   ├── DateUtils.ts        # Date formatting helpers
    │   ├── HydrationUtils.ts   # ML ↔ oz conversion
    │   └── WeightUtils.ts      # Grams ↔ pounds conversion
    ├── types/
    │   ├── index.ts            # Core types (OAuth, workouts, user profile)
    │   ├── activity.ts         # Activity types and enums
    │   ├── golf.ts             # Golf scorecard types
    │   ├── heartrate.ts        # Heart rate types
    │   ├── hydration.ts        # Hydration types
    │   ├── sleep.ts            # Sleep data types
    │   ├── weight.ts           # Weight types
    │   └── wellness.ts         # Wellness types (UserSummary, HRV, Stress, etc.)
    └── workouts/
        ├── Running.ts
        └── templates/
            └── RunningTemplate.ts
```

## Key patterns

-   **Authentication**: OAuth1 → OAuth2 exchange flow. Tokens auto-refresh via axios interceptor on 401. Use `exportCurrentTokens()` / `loadToken()` to persist tokens across sessions.
-   **MFA**: `login()` throws `GarminMfaRequiredError` if 2FA is required. Call `resumeWithMfa(code)` to complete login.
-   **Date params**: Methods accept `Date` objects or `'YYYY-MM-DD'` strings. Internally converted via `toDateString()`.
-   **Domain support**: Constructor accepts `garmin.com` (default) or `garmin.cn`.

## What was added in this PR

### MFA support (`HttpClient.ts`)

-   `GarminMfaRequiredError` — thrown by `login()` when Garmin requires 2FA
-   `MfaLoginState` interface — holds CSRF token and signin URL for the MFA step
-   `resumeWithMfa(mfaCode)` — submits the verification code and completes OAuth flow
-   `handleMFA(html)` — detects MFA challenge pages and captures state

### Wellness API endpoints (`UrlClass.ts` + `GarminConnect.ts`)

New methods on `GarminConnect`:

| Method                           | Returns                                                          |
| -------------------------------- | ---------------------------------------------------------------- |
| `getUserSummary(date?)`          | `IUserSummary` — steps, calories, stress, distance, floors       |
| `getBodyComposition(start, end)` | `IBodyCompositionData` — weight, BMI, body fat, muscle mass      |
| `getHrvData(date?)`              | `IHrvData` — HRV last night, weekly avg, status                  |
| `getStressData(date?)`           | `IStressData` — overall stress, rest/activity/stress percentages |
| `getBodyBattery(start, end)`     | `IBodyBatteryData[]` — charged/drained values                    |
| `getSpO2Data(date?)`             | `ISpO2Data` — blood oxygen saturation                            |
| `getFitnessAge(date?)`           | `IFitnessAgeData` — fitness age                                  |
| `getEnduranceScore(date?)`       | `IEnduranceScoreData` — endurance score                          |
| `getRespirationData(date?)`      | `IRespirationData` — breathing rate                              |

### New type file (`types/wellness.ts`)

Full TypeScript interfaces for all wellness API responses.

### Exported types (`index.ts`)

All type files are now re-exported from the package root for convenient importing.
