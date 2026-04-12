# Social, Device & News Feed

---

## getSocialConnections

Get a list of all Garmin Connect social connections.

```typescript
getSocialConnections(): Promise<ISocialConnections>
```

```js
const { userConnections } = await GCClient.getSocialConnections();
userConnections.forEach((conn) => {
    console.log(conn.fullName, conn.displayName);
});
```

---

## getDeviceInfo

Get a list of all registered Garmin devices for the account, including model names and firmware versions.

```typescript
getDeviceInfo(): Promise<any[]>
```

```js
const devices = await GCClient.getDeviceInfo();
devices.forEach((device) => {
    console.log(device.productDisplayName, device.currentFirmwareVersion);
});
```

---

## getNewsFeed

Get activities from your social news feed (connections' activities).

```typescript
getNewsFeed(start?: number, limit?: number): Promise<any[]>
```

| Parameter | Type   | Required | Description               |
| --------- | ------ | -------- | ------------------------- |
| `start`   | number | No       | Pagination offset         |
| `limit`   | number | No       | Number of items to return |

```js
// Most recent feed items
const feed = await GCClient.getNewsFeed();

// Page through feed (items 10–20)
const page2 = await GCClient.getNewsFeed(10, 10);
```
