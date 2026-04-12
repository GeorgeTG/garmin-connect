# Types Reference

All types are exported from the `garmin-connect` package:

```ts
import {
    GarminConnect,
    IActivity,
    ActivityType,
    SleepData
} from 'garmin-connect';
```

---

## Primitive types

| Type              | Base     | Description                        |
| ----------------- | -------- | ---------------------------------- |
| `GCActivityId`    | `number` | Activity identifier                |
| `GCUserProfileId` | `number` | User profile identifier            |
| `GCUserHash`      | `string` | User display name (UUID-like hash) |
| `GCWorkoutId`     | `string` | Workout identifier                 |
| `GCBadgeId`       | `number` | Badge identifier                   |
| `GarminDomain`    | `string` | `'garmin.com'` or `'garmin.cn'`    |

---

## Enums

### ActivityType

```ts
enum ActivityType {
    Cycling = 'cycling',
    FitnessEquipment = 'fitness_equipment',
    Walking = 'walking',
    Hiking = 'hiking',
    Other = 'other',
    WaterSport = 'water_sports',
    Running = 'street_running'
}
```

### ActivitySubType

```ts
enum ActivitySubType {
    IndoorCardio = 'indoor_cardio',
    StrengthTraining = 'strength_training',
    HIIT = 'hiit',
    Yoga = 'yoga',
    IndoorCycling = 'indoor_cycling',
    Breathwork = 'breathwork',
    Surfing = 'surfing',
    StreetRunning = 'street_running',
    TrailRunning = 'trail_running',
    IndoorRunning = 'indoor_running'
}
```

### ExportFileType

```ts
enum ExportFileType {
    tcx,
    gpx,
    kml,
    zip
}
```

### UploadFileType

```ts
enum UploadFileType {
    tcx,
    gpx,
    fit
}
```

---

## Auth types

### IGarminTokens

```ts
interface IGarminTokens {
    oauth1: IOauth1Token;
    oauth2: IOauth2Token;
}
```

### IOauth1Token

```ts
interface IOauth1Token {
    oauth_token: string;
    oauth_token_secret: string;
}
```

### IOauth2Token

```ts
interface IOauth2Token {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    expires_at: number;
    refresh_token_expires_in: number;
    refresh_token_expires_at: number;
    token_type: string;
    scope: string;
}
```

---

## User types

### ISocialProfile

Key fields returned by `getUserProfile()`:

```ts
interface ISocialProfile {
    displayName: GCUserHash; // used in many API URLs
    fullName: string;
    profileImageUrlSmall: string;
    location: string;
    userLevel: number;
}
```

### ISocialConnections

```ts
interface ISocialConnections {
    userConnections: ISocialConnection[];
    pagination: unknown;
}
```

---

## Activity types

### IActivity

Large object (~230 fields). Key fields:

```ts
interface IActivity {
    activityId: GCActivityId;
    activityName: string;
    startTimeLocal: string;
    distance: number; // meters
    duration: number; // seconds
    elapsedDuration: number;
    averageSpeed: number; // m/s
    maxSpeed: number;
    averageHR: number;
    maxHR: number;
    calories: number;
    activityType: { typeKey: string };
}
```

---

## Health types

### SleepData

```ts
interface SleepData {
    dailySleepDTO: SleepDTO;
    sleepMovement: SleepMovement[];
    sleepLevels: SleepLevels[];
    remSleepData: boolean;
    restlessMomentsCount: number;
}
```

Sleep score: `dailySleepDTO.sleepScores.overall.value`

### HeartRate

```ts
interface HeartRate {
    restingHeartRate: number;
    maxHeartRate: number;
    minHeartRate: number;
    heartRateValues: [number, number][]; // [timestamp, bpm]
}
```

### WeightData

```ts
interface WeightData {
    totalAverage: { weight: number }; // grams
    dateWeightList: DateWeight[];
}
```

### HydrationData

```ts
interface HydrationData {
    valueInML: number;
    goalInML: number;
    sweatLossInML: number;
}
```

---

## Wellness types

### IUserSummary

~90 fields. Key ones:

```ts
interface IUserSummary {
    totalSteps: number;
    stepGoal: number;
    totalDistanceMeters: number;
    activeKilocalories: number;
    restingKilocalories: number;
    floorsAscended: number;
    averageStressLevel: number;
    restStressDuration: number;
    bodyBatteryChargedValue: number;
    bodyBatteryDrainedValue: number;
    averageSpo2: number;
    averageMonitoringEnvironmentAltitude: number;
}
```

### IHrvData

```ts
interface IHrvData {
    hrvSummary: {
        lastNight: number;
        weeklyAvg: number;
        status: string; // 'BALANCED', 'UNBALANCED', etc.
        startTimestampGMT: string;
        endTimestampGMT: string;
    };
    startTimestampGMT: string;
}
```

### IStressData

```ts
interface IStressData {
    overallStressLevel: number;
    restStressPercentage: number;
    activityStressPercentage: number;
    uncategorizedStressPercentage: number;
    stressChartValueOffset: number;
    stressChartYAxisOrigin: number;
}
```

---

## Gear type

```ts
interface Gear {
    gearPk: number;
    uuid: string;
    displayName: string;
    gearTypeName: string;
    gearMakeName: string;
    gearModelName: string;
    gearStatusName: string;
    dateBegin: string;
    maximumMeters: number;
}
```

---

## Badge types

### IBadge

```ts
interface IBadge {
    badgeId: GCBadgeId;
    badgeName: string;
    badgePoints: number;
    badgeEarnedDate: string;
    badgeEarnedNumber: number;
    relatedBadges: IBadgeRelated[] | null;
    connections: IBadgeSocialConnection[] | null;
}
```

---

## Workout types

### IWorkout

```ts
interface IWorkout {
    workoutId?: number;
    workoutName: string;
    description?: string;
    sportType: ISportType;
    estimatedDurationInSecs: number;
}
```

### IWorkoutDetail extends IWorkout

Adds `workoutSegments: IWorkoutSegment[]` with full step-by-step structure.
