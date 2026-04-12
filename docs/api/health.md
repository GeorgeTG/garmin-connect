# Health Data

All date parameters default to **today** if not provided.

---

## getSteps

Get total step count for a given date.

```typescript
getSteps(date?: Date): Promise<number>
```

```js
const steps = await GCClient.getSteps();
console.log(`Steps today: ${steps}`);

const steps = await GCClient.getSteps(new Date('2024-01-15'));
```

---

## getSleepData

Get full sleep data for a given date, including stages, movements, and scores.

```typescript
getSleepData(date?: Date): Promise<SleepData>
```

```js
const sleep = await GCClient.getSleepData(new Date('2024-01-15'));
const score = sleep.dailySleepDTO?.sleepScores?.overall?.value;
const durationMs = sleep.dailySleepDTO?.sleepTimeSeconds * 1000;
```

**Note:** Sleep score is at `dailySleepDTO.sleepScores.overall.value` — not `overallSleepScore`.

---

## getSleepDuration

Get sleep duration as hours and minutes.

```typescript
getSleepDuration(date?: Date): Promise<{ hours: number; minutes: number }>
```

```js
const { hours, minutes } = await GCClient.getSleepDuration();
console.log(`Slept ${hours}h ${minutes}m`);
```

---

## getDailyWeightData

Get full weight data for a given date.

```typescript
getDailyWeightData(date?: Date): Promise<WeightData>
```

```js
const weightData = await GCClient.getDailyWeightData(new Date('2024-01-15'));
// weightData.totalAverage.weight is in grams
```

---

## getDailyWeightInPounds

Get weight in pounds for a given date.

```typescript
getDailyWeightInPounds(date?: Date): Promise<number>
```

```js
const lbs = await GCClient.getDailyWeightInPounds();
console.log(`Weight: ${lbs} lbs`);
```

---

## updateWeight

Log a weight entry.

```typescript
updateWeight(date?: Date, lbs: number, timezone: string): Promise<UpdateWeight>
```

| Parameter  | Type   | Required | Description          |
| ---------- | ------ | -------- | -------------------- |
| `date`     | Date   | No       | Defaults to today    |
| `lbs`      | number | Yes      | Weight in pounds     |
| `timezone` | string | Yes      | IANA timezone string |

```js
await GCClient.updateWeight(new Date(), 175.5, 'America/New_York');
```

---

## getDailyHydration

Get hydration intake in ounces for a given date.

```typescript
getDailyHydration(date?: Date): Promise<number>
```

```js
const oz = await GCClient.getDailyHydration();
console.log(`Hydration: ${oz} oz`);
```

---

## updateHydrationLogOunces

Log a hydration entry in ounces. Accepts negative values to correct previous entries.

```typescript
updateHydrationLogOunces(date?: Date, valueInOz: number): Promise<WaterIntake>
```

```js
await GCClient.updateHydrationLogOunces(new Date(), 16); // log 16 oz
await GCClient.updateHydrationLogOunces(new Date(), -8); // remove 8 oz
```

---

## getHeartRate

Get daily heart rate data (resting, max, min, and time-series values).

```typescript
getHeartRate(date?: Date): Promise<HeartRate>
```

```js
const hr = await GCClient.getHeartRate(new Date('2024-01-15'));
console.log(`Resting HR: ${hr.restingHeartRate}`);
console.log(`Max HR: ${hr.maxHeartRate}`);
```
