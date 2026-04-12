# Authentication

## Basic login

```js
await GCClient.login();
// or override credentials at login time:
await GCClient.login('my.email@example.com', 'MySecretPassword');
```

---

## MFA

If your Garmin account has two-factor authentication enabled, `login()` throws a `GarminMfaRequiredError`. Catch it and call `resumeWithMfa()` with the 6-digit code from your authenticator app.

```js
import { GarminConnect, GarminMfaRequiredError } from 'garmin-connect';

try {
    await GCClient.login();
} catch (err) {
    if (err instanceof GarminMfaRequiredError) {
        const mfaCode = '123456'; // from authenticator app
        await GCClient.resumeWithMfa(mfaCode);
    } else {
        throw err;
    }
}
```

---

## Token reuse

OAuth tokens are long-lived. Persist them between runs to avoid logging in every time.

### Save to files

```js
GCClient.exportTokenToFile('/path/to/tokens');
// Creates: oauth1_token.json, oauth2_token.json
```

```js
GCClient.loadTokenByFile('/path/to/tokens');
// No login() call needed
```

### Save to database or custom storage

```js
// Export
const { oauth1, oauth2 } = GCClient.exportToken();
// Store oauth1 and oauth2 in your database

// Restore
GCClient.loadToken(oauth1, oauth2);
```

The OAuth2 token has a short TTL (~1 hour) and is automatically refreshed using the long-lived OAuth1 token. After a sync, re-export tokens if you want to persist the refreshed version:

```js
const tokens = GCClient.exportToken();
await db.saveTokens(tokens); // your storage
```

---

## Token expiry

If the OAuth1 token also expires, the user must log in again with username and password. There is no way to refresh without credentials at that point.

---

## Events

The `sessionChange` event fires whenever the internal session changes (e.g. token refresh):

```js
GCClient.on('sessionChange', (session) => {
    // persist updated session
    console.log(session);
});
```
