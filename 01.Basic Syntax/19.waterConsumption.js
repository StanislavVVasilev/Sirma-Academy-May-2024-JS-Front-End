function waterConsumption(weeklyWaterConsumption, household) {

    let dailyWaterConsumption = weeklyWaterConsumption / 7 / household;

    console.log(dailyWaterConsumption.toFixed(2));

}

waterConsumption(2450, 7);
waterConsumption(3150, 10);
waterConsumption(980, 7);