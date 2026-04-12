# Activity Images

---

## uploadImage

Upload an image (JPG, PNG) to an activity.

```typescript
uploadImage(activity: { activityId: GCActivityId }, file: string): Promise<any>
```

| Parameter  | Type   | Required | Description                                 |
| ---------- | ------ | -------- | ------------------------------------------- |
| `activity` | object | Yes      | Object with `activityId`                    |
| `file`     | string | Yes      | Absolute or relative path to the image file |

```js
const [activity] = await GCClient.getActivities(0, 1);
const result = await GCClient.uploadImage(activity, './photo.jpg');
```

---

## deleteImage

Delete an image from an activity.

```typescript
deleteImage(activity: { activityId: GCActivityId }, imageId: string): Promise<void>
```

| Parameter  | Type   | Required | Description                       |
| ---------- | ------ | -------- | --------------------------------- |
| `activity` | object | Yes      | Object with `activityId`          |
| `imageId`  | string | Yes      | Image ID (from activity metadata) |

```js
const [activity] = await GCClient.getActivities(0, 1);
const details = await GCClient.getActivity(activity);
const imageId = details.metadataDTO?.activityImages?.[0]?.imageId;

if (imageId) {
    await GCClient.deleteImage(activity, imageId);
}
```
