# Wellness API

Advanced wellness metrics available on Garmin Connect. All date parameters default to **today**.

---

## getUserSummary

Get the comprehensive daily summary — the main wellness snapshot including steps, calories, stress, distance, floors, and more (~90 fields).

```typescript
getUserSummary(date?: Date): Promise<IUserSummary>
```

```js
const summary = await GCClient.getUserSummary(new Date('2024-01-15'));

console.log(summary.totalSteps);
console.log(summary.activeKilocalories);
console.log(summary.averageStressLevel);
console.log(summary.floorsAscended);
console.log(summary.totalDistanceMeters);
console.log(summary.intensityMinutes);
```

**Note:** The URL for this endpoint includes `/{displayName}?calendarDate={date}`, not a path-based date. This is handled automatically.

---

## getBodyComposition

Get body composition data (weight, BMI, body fat %, muscle mass, bone mass) for a date range.

```typescript
getBodyComposition(startDate: Date | string, endDate: Date | string): Promise<IBodyCompositionData>
```

```js
const bodyComp = await GCClient.getBodyComposition('2024-01-01', '2024-01-31');
// or with Date objects:
const bodyComp = await GCClient.getBodyComposition(
    new Date('2024-01-01'),
    new Date()
);
```

---

## getHrvData

Get Heart Rate Variability (HRV) data — nightly HRV, weekly average, and status.

```typescript
getHrvData(date?: Date): Promise<IHrvData>
```

```js
const hrv = await GCClient.getHrvData(new Date('2024-01-15'));
console.log(hrv.hrvSummary.lastNight);
console.log(hrv.hrvSummary.weeklyAvg);
console.log(hrv.hrvSummary.status); // 'BALANCED', 'UNBALANCED', etc.
```

---

## getStressData

Get daily stress data — overall level, resting %, active %, stress %.

```typescript
getStressData(date?: Date): Promise<IStressData>
```

```js
const stress = await GCClient.getStressData(new Date('2024-01-15'));
console.log(stress.overallStressLevel); // 0–100
console.log(stress.restStressPercentage);
console.log(stress.activityStressPercentage);
```

---

## getBodyBattery

Get Body Battery energy levels for a date range. Returns an array of daily records.

```typescript
getBodyBattery(startDate: Date | string, endDate: Date | string): Promise<IBodyBatteryData[]>
```

```js
const battery = await GCClient.getBodyBattery('2024-01-01', '2024-01-07');
battery.forEach((day) => {
    console.log(`${day.date}: charged=${day.charged}, drained=${day.drained}`);
});
```

---

## getSpO2Data

Get blood oxygen saturation (SpO2) data for a given date.

```typescript
getSpO2Data(date?: Date): Promise<ISpO2Data>
```

```js
const spo2 = await GCClient.getSpO2Data(new Date('2024-01-15'));
console.log(spo2.averageSpO2);
```

---

## getFitnessAge

Get your Garmin fitness age for a given date.

```typescript
getFitnessAge(date?: Date): Promise<IFitnessAgeData>
```

```js
const fitnessAge = await GCClient.getFitnessAge(new Date('2024-01-15'));
console.log(fitnessAge.fitnessAge);
```

---

## getEnduranceScore

Get your endurance score for a given date.

```typescript
getEnduranceScore(date?: Date): Promise<IEnduranceScoreData>
```

```js
const endurance = await GCClient.getEnduranceScore(new Date('2024-01-15'));
console.log(endurance.overallScore);
```

---

## getRespirationData

Get breathing/respiration rate data for a given date.

```typescript
getRespirationData(date?: Date): Promise<IRespirationData>
```

```js
const respiration = await GCClient.getRespirationData(new Date('2024-01-15'));
console.log(respiration.avgWakingRespirationValue);
console.log(respiration.avgSleepRespirationValue);
```
