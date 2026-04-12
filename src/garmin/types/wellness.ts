// ─── User Daily Summary ──────────────────────────────────────
export interface IUserSummary {
    totalKilocalories?: number;
    activeKilocalories?: number;
    bmrKilocalories?: number;
    consumedKilocalories?: number;
    burnedKilocalories?: number;
    totalSteps?: number;
    dailyStepGoal?: number;
    totalDistanceMeters?: number;
    floorsAscended?: number;
    floorsDescended?: number;
    restingHeartRate?: number;
    minHeartRate?: number;
    maxHeartRate?: number;
    minAvgHeartRate?: number;
    maxAvgHeartRate?: number;
    lastSevenDaysAvgRestingHeartRate?: number;
    abnormalHeartRateAlertsCount?: number;
    averageStressLevel?: number;
    maxStressLevel?: number;
    stressDuration?: number;
    restStressDuration?: number;
    activityStressDuration?: number;
    lowStressDuration?: number;
    mediumStressDuration?: number;
    highStressDuration?: number;
    bodyBatteryChargedValue?: number;
    bodyBatteryDrainedValue?: number;
    bodyBatteryHighestValue?: number;
    bodyBatteryLowestValue?: number;
    bodyBatteryMostRecentValue?: number;
    averageSpo2?: number;
    lowestSpo2?: number;
    latestSpo2?: number;
    highestRespirationValue?: number;
    lowestRespirationValue?: number;
    latestRespirationValue?: number;
    moderateIntensityMinutes?: number;
    vigorousIntensityMinutes?: number;
    intensityMinutesGoal?: number;
    highlyActiveSeconds?: number;
    activeSeconds?: number;
    sedentarySeconds?: number;
    sleepingSeconds?: number;
    measurableAwakeDuration?: number;
    measurableAsleepDuration?: number;
    calendarDate?: string;
    startTimestampGMT?: number;
    endTimestampGMT?: number;
    startTimestampLocal?: number;
    endTimestampLocal?: number;
    [key: string]: unknown;
}

// ─── Body Composition ────────────────────────────────────────
export interface IBodyCompositionEntry {
    samplePk?: number;
    date?: number;
    calendarDate?: string;
    weight?: number;
    bmi?: number;
    bodyFat?: number;
    bodyWater?: number;
    boneMass?: number;
    muscleMass?: number;
    visceralFat?: number;
    metabolicAge?: number;
    physiqueRating?: number;
    sourceType?: string;
    [key: string]: unknown;
}

export interface IBodyCompositionData {
    startDate?: string;
    endDate?: string;
    dateWeightList?: IBodyCompositionEntry[];
    totalAverage?: IBodyCompositionEntry;
    [key: string]: unknown;
}

// ─── HRV ─────────────────────────────────────────────────────
export interface IHrvSummary {
    calendarDate?: string;
    weeklyAvg?: number;
    lastNight?: number;
    lastNightAvg?: number;
    lastNight5MinHigh?: number;
    baseline?: {
        lowUpper?: number;
        balancedLow?: number;
        balancedUpper?: number;
        markerValue?: number;
    };
    status?: string;
    startTimestampGMT?: number;
    endTimestampGMT?: number;
    startTimestampLocal?: number;
    endTimestampLocal?: number;
    [key: string]: unknown;
}

export interface IHrvData {
    hrvSummaries?: IHrvSummary[];
    startTimestampGMT?: number;
    endTimestampGMT?: number;
    startTimestampLocal?: number;
    endTimestampLocal?: number;
    [key: string]: unknown;
}

// ─── Stress ──────────────────────────────────────────────────
export interface IStressData {
    calendarDate?: string;
    startTimestampGMT?: number;
    endTimestampGMT?: number;
    startTimestampLocal?: number;
    endTimestampLocal?: number;
    maxStressLevel?: number;
    avgStressLevel?: number;
    stressChartValueOffset?: number;
    stressChartYAxisOrigin?: number;
    stressValuesArray?: [number, number][];
    bodyBatteryValuesArray?: [number, number][];
    [key: string]: unknown;
}

// ─── Body Battery ────────────────────────────────────────────
export interface IBodyBatteryEvent {
    startTimestampGMT?: string;
    endTimestampGMT?: string;
    event?: string;
    durationInMilliseconds?: number;
    bodyBatteryImpact?: number;
    [key: string]: unknown;
}

export interface IBodyBatteryData {
    date?: string;
    charged?: number;
    drained?: number;
    startOfDay?: number;
    endOfDay?: number;
    bodyBatteryEvents?: IBodyBatteryEvent[];
    [key: string]: unknown;
}

// ─── SpO2 ────────────────────────────────────────────────────
export interface ISpO2Data {
    calendarDate?: string;
    startTimestampGMT?: number;
    endTimestampGMT?: number;
    startTimestampLocal?: number;
    endTimestampLocal?: number;
    averageSpo2?: number;
    lowestSpo2?: number;
    latestSpo2?: number;
    latestSpo2ReadingTimeGmt?: string;
    latestSpo2ReadingTimeLocal?: string;
    spo2HourlyAverages?: { spo2?: number; timestampGMT?: number }[];
    [key: string]: unknown;
}

// ─── Fitness Age ─────────────────────────────────────────────
export interface IFitnessAgeData {
    chronologicalAge?: number;
    fitnessAge?: number;
    achievableFitnessAge?: number;
    previousFitnessAge?: number;
    bmi?: number;
    rhr?: number;
    vigorousMinutesWeekAvg?: number;
    [key: string]: unknown;
}

// ─── Endurance Score ─────────────────────────────────────────
export interface IEnduranceScoreData {
    overallScore?: number;
    classificationMessage?: string;
    calendarDate?: string;
    [key: string]: unknown;
}

// ─── Respiration ─────────────────────────────────────────────
export interface IRespirationData {
    calendarDate?: string;
    startTimestampGMT?: number;
    endTimestampGMT?: number;
    highestRespirationValue?: number;
    lowestRespirationValue?: number;
    avgWakingRespirationValue?: number;
    avgSleepRespirationValue?: number;
    [key: string]: unknown;
}
