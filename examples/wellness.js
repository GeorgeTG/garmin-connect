const { GarminConnect } = require('garmin-connect');

const today = new Date();

const main = async () => {
    const GCClient = new GarminConnect({
        username: 'your-email@example.com',
        password: 'your-password'
    });
    await GCClient.login();

    // --- Daily summary (steps, calories, stress, body battery, SpO2…) ---
    const summary = await GCClient.getUserSummary(today);
    console.log('Steps:', summary.totalSteps, '/', summary.stepGoal);
    console.log('Active kcal:', summary.activeKilocalories);
    console.log('Avg stress:', summary.averageStressLevel);
    console.log('Body battery charged:', summary.bodyBatteryChargedValue);
    console.log('Body battery drained:', summary.bodyBatteryDrainedValue);
    console.log('Avg SpO2:', summary.averageSpo2);

    // --- HRV ---
    const hrv = await GCClient.getHrvData(today);
    if (hrv?.hrvSummary) {
        console.log('\nHRV last night:', hrv.hrvSummary.lastNight);
        console.log('HRV weekly avg:', hrv.hrvSummary.weeklyAvg);
        console.log('HRV status:', hrv.hrvSummary.status);
    }

    // --- Stress breakdown ---
    const stress = await GCClient.getStressData(today);
    console.log('\nOverall stress:', stress.overallStressLevel);
    console.log('Rest stress %:', stress.restStressPercentage?.toFixed(1));

    // --- Body composition ---
    // const comp = await GCClient.getBodyComposition(today);
    // console.log('Body fat %:', comp?.bodyFatPercentage);

    // --- Fitness age & endurance score ---
    // const fitnessAge = await GCClient.getFitnessAge();
    // console.log('Fitness age:', fitnessAge?.chronologicalAge, '→', fitnessAge?.fitnessAge);

    // const endurance = await GCClient.getEnduranceScore(today);
    // console.log('Endurance score:', endurance?.overallScore);
};

main().catch(console.error);
