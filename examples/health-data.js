const { GarminConnect } = require('garmin-connect');

const today = new Date();

const main = async () => {
    const GCClient = new GarminConnect({
        username: 'your-email@example.com',
        password: 'your-password'
    });
    await GCClient.login();

    // --- Steps ---
    const steps = await GCClient.getSteps(today);
    console.log('Steps today:', steps);

    // --- Sleep ---
    const sleep = await GCClient.getSleepData(today);
    const score = sleep?.dailySleepDTO?.sleepScores?.overall?.value;
    const durationHrs = (sleep?.dailySleepDTO?.sleepTimeSeconds / 3600).toFixed(
        1
    );
    console.log(`Sleep: ${durationHrs} hrs, score ${score}`);

    // --- Heart rate ---
    const hr = await GCClient.getHeartRate(today);
    console.log(
        `Heart rate — resting: ${hr.restingHeartRate}, max: ${hr.maxHeartRate}`
    );

    // --- Weight ---
    const weight = await GCClient.getDailyWeightData(today);
    if (weight?.dateWeightList?.length) {
        const latest = weight.dateWeightList[weight.dateWeightList.length - 1];
        const kg = (latest.weight / 1000).toFixed(1);
        console.log('Weight:', kg, 'kg');
    }

    // --- Hydration ---
    const hydration = await GCClient.getDailyHydration(today);
    const intakeMl = hydration?.valueInML ?? 0;
    const goalMl = hydration?.goalInML ?? 0;
    console.log(`Hydration: ${intakeMl} ml / ${goalMl} ml goal`);

    // --- Log water intake (ml) ---
    // await GCClient.updateHydrationLogOunces(16.9); // 500 ml ≈ 16.9 oz
    // console.log('Water logged');
};

main().catch(console.error);
