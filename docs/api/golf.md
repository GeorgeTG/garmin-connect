# Golf

---

## getGolfSummary

Get a summary of all golf scorecards.

```typescript
getGolfSummary(): Promise<GolfSummary>
```

```js
const summary = await GCClient.getGolfSummary();
summary.scorecardSummaries.forEach((round) => {
    console.log(round.courseName, round.strokes, round.startTime);
});
```

---

## getGolfScorecard

Get full scorecard data for a specific round.

```typescript
getGolfScorecard(scorecardId: number): Promise<GolfScorecard>
```

| Parameter     | Type   | Required | Description                       |
| ------------- | ------ | -------- | --------------------------------- |
| `scorecardId` | number | Yes      | Scorecard ID (from `GolfSummary`) |

```js
const summary = await GCClient.getGolfSummary();
const scorecardId = summary.scorecardSummaries[0].id;

const scorecard = await GCClient.getGolfScorecard(scorecardId);
scorecard.holes.forEach((hole) => {
    console.log(`Hole ${hole.holeNumber}: ${hole.strokes} strokes`);
});
```
