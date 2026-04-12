const { GarminConnect } = require('garmin-connect');
const fs = require('fs');
const path = require('path');

const main = async () => {
    const GCClient = new GarminConnect({
        username: 'your-email@example.com',
        password: 'your-password'
    });
    await GCClient.login();

    // --- List recent activities ---
    const activities = await GCClient.getActivities(0, 10);
    console.log(`Found ${activities.length} activities`);
    activities.forEach((a) => {
        const km = (a.distance / 1000).toFixed(2);
        const mins = Math.round(a.duration / 60);
        console.log(
            `[${a.startTimeLocal}] ${a.activityName} — ${km} km, ${mins} min`
        );
    });

    // --- Get detailed data for the most recent activity ---
    const [latest] = activities;
    const detail = await GCClient.getActivity(latest);
    console.log(
        '\nLatest activity detail:',
        JSON.stringify(detail.summaryDTO, null, 2)
    );

    // --- Total activity count ---
    const count = await GCClient.countActivities();
    console.log(`\nTotal activities: ${count}`);

    // --- Download original file (FIT/GPX/TCX) ---
    // Downloads to current directory
    // await GCClient.downloadOriginalActivityData(latest, '.');
    // console.log('Downloaded activity file');

    // --- Update activity name ---
    // await GCClient.updateActivity({ ...latest, activityName: 'Morning Run' });
    // console.log('Activity renamed');

    // --- Upload a FIT/GPX/TCX file ---
    // await GCClient.uploadActivity('./my-workout.fit');
    // console.log('Activity uploaded');
};

main().catch(console.error);
