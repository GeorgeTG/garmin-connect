# Workouts

## getWorkouts

Get a paginated list of your saved workouts.

```typescript
getWorkouts(start: number, limit: number): Promise<IWorkout[]>
```

```js
const workouts = await GCClient.getWorkouts(0, 20);
```

---

## getWorkoutDetail

Get full details for a specific workout including all steps.

```typescript
getWorkoutDetail(workout: { workoutId: string }): Promise<IWorkoutDetail>
```

```js
const workouts = await GCClient.getWorkouts(0, 10);
const detail = await GCClient.getWorkoutDetail({
    workoutId: workouts[0].workoutId
});
```

---

## addWorkout

Add a custom workout.

```typescript
addWorkout(workout: IWorkoutDetail | Running): Promise<IWorkoutDetail>
```

```js
// From an existing workout object (omit id fields):
const newWorkout = await GCClient.addWorkout(workoutDetail);
```

---

## addRunningWorkout

Convenience method to create a running workout by distance.

```typescript
addRunningWorkout(name: string, meters: number, description: string): Promise<IWorkoutDetail>
```

```js
const workout = await GCClient.addRunningWorkout('My 5k', 5000, 'Easy pace');
```

---

## scheduleWorkout

Schedule a workout to your calendar on a specific date.

```typescript
scheduleWorkout(workout: { workoutId: string }, date: Date): Promise<void>
```

```js
const workouts = await GCClient.getWorkouts(0, 5);
await GCClient.scheduleWorkout(
    { workoutId: workouts[0].workoutId },
    new Date('2024-03-24')
);
```

The workout will appear in your Garmin calendar and sync to your device.

---

## deleteWorkout

Delete a saved workout.

```typescript
deleteWorkout(workout: { workoutId: string }): Promise<any>
```

```js
const workouts = await GCClient.getWorkouts(0, 5);
await GCClient.deleteWorkout({ workoutId: workouts[0].workoutId });
```
