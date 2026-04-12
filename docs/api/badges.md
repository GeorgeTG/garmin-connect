# Badges

---

## getBadgesEarned

Get all badges the user has earned.

```typescript
getBadgesEarned(): Promise<IBadge[]>
```

```js
const badges = await GCClient.getBadgesEarned();
badges.forEach((b) => console.log(b.badgeName, b.badgeEarnedDate));
```

---

## getBadgesAvailable

Get all badges available to earn.

```typescript
getBadgesAvailable(): Promise<IBadge[]>
```

```js
const available = await GCClient.getBadgesAvailable();
```

---

## getBadgeDetail

Get full details for a specific badge by ID.

```typescript
getBadgeDetail(badgeId: GCBadgeId): Promise<IBadge>
```

| Parameter | Type   | Required | Description      |
| --------- | ------ | -------- | ---------------- |
| `badgeId` | number | Yes      | Badge identifier |

```js
const badges = await GCClient.getBadgesEarned();
const detail = await GCClient.getBadgeDetail(badges[0].badgeId);
console.log(detail.relatedBadges);
console.log(detail.connections);
```
