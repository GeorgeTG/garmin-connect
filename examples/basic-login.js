const { GarminConnect } = require('garmin-connect');
const fs = require('fs');

const TOKEN_FILE = './garmin-tokens.json';

const main = async () => {
    const GCClient = new GarminConnect({
        username: 'your-email@example.com',
        password: 'your-password'
    });

    // --- Option 1: Fresh login ---
    await GCClient.login();

    // Save tokens for reuse (avoids logging in every run)
    const tokens = GCClient.exportToken();
    fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokens, null, 2));
    console.log('Tokens saved to', TOKEN_FILE);

    // --- Option 2: Reuse saved tokens ---
    // const tokens = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf-8'));
    // await GCClient.loadToken(tokens.oauth1, tokens.oauth2);

    // Get user profile
    const profile = await GCClient.getUserProfile();
    console.log('Logged in as:', profile.fullName, `(${profile.displayName})`);

    const settings = await GCClient.getUserSettings();
    console.log('Locale:', settings.userData?.locale);
};

main().catch(console.error);
