const { GarminConnect } = require('garmin-connect');

const main = async () => {
    const GCClient = new GarminConnect({
        username: 'your-email@example.com',
        password: 'your-password'
    });
    await GCClient.login();

    // --- Social connections ---
    const { userConnections } = await GCClient.getSocialConnections();
    console.log(`You have ${userConnections.length} connections`);
    userConnections.slice(0, 5).forEach((c) => {
        console.log(' -', c.fullName, `(${c.displayName})`);
    });

    // --- Registered devices ---
    const devices = await GCClient.getDeviceInfo();
    console.log(`\nRegistered devices (${devices.length}):`);
    devices.forEach((d) => {
        console.log(
            ` - ${d.productDisplayName} — firmware ${d.currentFirmwareVersion}`
        );
    });

    // --- News feed (connections' recent activities) ---
    const feed = await GCClient.getNewsFeed(0, 5);
    console.log(`\nNews feed (${feed.length} items):`);
    feed.forEach((item) => {
        console.log(` - ${item.activityName} by ${item.ownerDisplayName}`);
    });

    // --- Badges ---
    const earned = await GCClient.getBadgesEarned();
    console.log(`\nBadges earned: ${earned.length}`);
    earned.slice(0, 3).forEach((b) => {
        console.log(
            ` - ${b.badgeName} (${b.badgePoints} pts) on ${b.badgeEarnedDate}`
        );
    });
};

main().catch(console.error);
