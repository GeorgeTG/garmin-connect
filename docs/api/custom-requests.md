# Custom Requests

The client exposes generic `get`, `post`, and `put` methods so you can call any Garmin Connect endpoint that isn't covered by a named method. The session, OAuth tokens, and headers are handled automatically.

---

## Finding endpoints

Use your browser's network tools while browsing [Garmin Connect](https://connect.garmin.com/) to discover API URLs. They follow the pattern:

```
https://connectapi.garmin.com/{service-name}/{resource}
```

---

## get

```typescript
get<T>(url: string, data?: any): Promise<T>
```

```js
// Example: fetch daily heart rate for a specific user hash and date
const displayName = '22f5f84c-de9d-4ad6-97f2-201097b3b983';
const url =
    'https://connectapi.garmin.com/wellness-service/wellness/dailyHeartRate';

const data = await GCClient.get(url, {
    params: { date: '2024-01-15', displayName }
});
```

---

## post

```typescript
post<T>(url: string, data: any): Promise<T>
```

```js
const result = await GCClient.post(url, { key: 'value' });
```

---

## put

```typescript
put<T>(url: string, data: any): Promise<T>
```

```js
const result = await GCClient.put(url, { key: 'updated-value' });
```

---

## Getting the user's displayName

Many Garmin endpoints require the user's display name (a UUID-like hash) in the URL:

```js
const profile = await GCClient.getUserProfile();
const displayName = profile.displayName;
```
