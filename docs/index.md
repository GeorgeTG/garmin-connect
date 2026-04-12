# garmin-connect

A powerful Node.js / TypeScript library for the Garmin Connect API. Read and write health, activity, and wellness data from your Garmin account.

## Install

```bash
npm install garmin-connect
```

## Quick Start

```js
const { GarminConnect } = require('garmin-connect');

const GCClient = new GarminConnect({
    username: 'my.email@example.com',
    password: 'MySecretPassword'
});

await GCClient.login();
const profile = await GCClient.getUserProfile();
console.log(`Hello, ${profile.fullName}`);
```

## Documentation

| Section                                   | Description                                              |
| ----------------------------------------- | -------------------------------------------------------- |
| [Getting Started](getting-started.md)     | Installation, credentials, domain support                |
| [Authentication](authentication.md)       | Login, MFA, token export/import, session reuse           |
| **API Reference**                         |                                                          |
| [Activities](api/activities.md)           | Get, upload, update, delete, download activities         |
| [Workouts](api/workouts.md)               | Create, schedule, manage workouts                        |
| [Health Data](api/health.md)              | Steps, sleep, weight, hydration, heart rate              |
| [Wellness](api/wellness.md)               | Daily summary, HRV, stress, body battery, SpO2, and more |
| [Badges](api/badges.md)                   | Earned and available badges                              |
| [Gear](api/gear.md)                       | List and link gear to activities                         |
| [Activity Images](api/images.md)          | Upload and delete activity images                        |
| [Golf](api/golf.md)                       | Golf scorecards                                          |
| [Social](api/social.md)                   | Social connections, news feed, device info               |
| [Custom Requests](api/custom-requests.md) | Make arbitrary API calls                                 |
| [Types Reference](types.md)               | All exported TypeScript interfaces and enums             |

## Examples

Runnable example scripts are in the [`examples/`](../examples/) folder:

-   [`basic-login.js`](../examples/basic-login.js) — Login and get user profile
-   [`activities.js`](../examples/activities.js) — Browse and download activities
-   [`health-data.js`](../examples/health-data.js) — Steps, sleep, weight, hydration
-   [`wellness.js`](../examples/wellness.js) — HRV, stress, body battery, SpO2
-   [`workouts.js`](../examples/workouts.js) — Create and schedule workouts
-   [`social.js`](../examples/social.js) — Social connections and news feed

## Garmin domains

Supports both `garmin.com` (default) and `garmin.cn`:

```js
const GCClient = new GarminConnect({ username, password }, 'garmin.cn');
```

## Links

-   [npm package](https://www.npmjs.com/package/garmin-connect)
-   [GitHub repository](https://github.com/Pythe1337N/garmin-connect)
-   [Garmin Connect status](https://connect.garmin.com/status/)
