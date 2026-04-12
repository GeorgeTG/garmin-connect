# Gear

---

## getGear

Get all gear for a user profile.

```typescript
getGear(userProfilePk: number): Promise<Gear[]>
```

| Parameter       | Type   | Required | Description                                                |
| --------------- | ------ | -------- | ---------------------------------------------------------- |
| `userProfilePk` | number | Yes      | User profile primary key — get from `getUserSettings().id` |

```js
const settings = await GCClient.getUserSettings();
const gear = await GCClient.getGear(settings.id);

gear.forEach((item) => {
    console.log(item.displayName, item.gearTypeName, item.gearMakeName);
});
```

---

## linkGearToActivity

Associate a gear item with an activity.

```typescript
linkGearToActivity(activityId: GCActivityId, gearUuid: string): Promise<Gear>
```

| Parameter    | Type   | Required | Description                  |
| ------------ | ------ | -------- | ---------------------------- |
| `activityId` | number | Yes      | Activity ID                  |
| `gearUuid`   | string | Yes      | Gear UUID (from `Gear.uuid`) |

```js
const settings = await GCClient.getUserSettings();
const gear = await GCClient.getGear(settings.id);
const [activity] = await GCClient.getActivities(0, 1);

await GCClient.linkGearToActivity(activity.activityId, gear[0].uuid);
```

---

## unlinkGearFromActivity

Remove a gear association from an activity.

```typescript
unlinkGearFromActivity(activityId: GCActivityId, gearUuid: string): Promise<Gear>
```

```js
await GCClient.unlinkGearFromActivity(activity.activityId, gear[0].uuid);
```
