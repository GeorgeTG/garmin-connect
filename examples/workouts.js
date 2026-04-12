const { GarminConnect } = require('garmin-connect');

const main = async () => {
    const GCClient = new GarminConnect({
        username: 'your-email@example.com',
        password: 'your-password'
    });
    await GCClient.login();

    // --- List saved workouts ---
    const workouts = await GCClient.getWorkouts(0, 20);
    console.log(`Found ${workouts.length} workouts`);
    workouts.forEach((w) => console.log(`[${w.workoutId}] ${w.workoutName}`));

    // --- Get full workout detail ---
    if (workouts.length) {
        const detail = await GCClient.getWorkoutDetail(workouts[0]);
        console.log('\nFirst workout detail:', JSON.stringify(detail, null, 2));
    }

    // --- Add a simple running workout ---
    const newWorkout = await GCClient.addRunningWorkout(
        'Easy 5K',
        5000,
        'Nice and easy pace'
    );
    console.log('\nCreated workout ID:', newWorkout.workoutId);

    // --- Schedule it for tomorrow ---
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await GCClient.scheduleWorkout(newWorkout, tomorrow);
    console.log('Scheduled for', tomorrow.toDateString());

    // --- Delete the workout ---
    // await GCClient.deleteWorkout(newWorkout);
    // console.log('Workout deleted');
};

main().catch(console.error);
