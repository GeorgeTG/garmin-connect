# Getting Started

## Installation

```bash
npm install garmin-connect
```

## Credentials

### Option 1 — Pass directly

```js
const { GarminConnect } = require('garmin-connect');

const GCClient = new GarminConnect({
    username: 'my.email@example.com',
    password: 'MySecretPassword'
});

await GCClient.login();
```

### Option 2 — Config file

Create `garmin.config.json` in your project root:

```json
{
    "username": "my.email@example.com",
    "password": "MySecretPassword"
}
```

Then simply:

```js
const GCClient = new GarminConnect();
await GCClient.login();
```

## Garmin domains

The library supports both `garmin.com` (default) and `garmin.cn`:

```js
const GCClient = new GarminConnect({ username, password }, 'garmin.cn');
```

## TypeScript

```ts
import GarminConnect from 'garmin-connect';

const GCClient = new GarminConnect({ username, password });
await GCClient.login();
```

## MFA (Two-Factor Authentication)

If your account has 2FA enabled, `login()` throws a `GarminMfaRequiredError`. See [Authentication → MFA](authentication.md#mfa) for how to handle it.

## Next steps

-   [Authentication](authentication.md) — token reuse, MFA, session management
-   [API Reference](index.md#documentation) — browse all available methods
-   [Examples](../examples/) — runnable scripts
