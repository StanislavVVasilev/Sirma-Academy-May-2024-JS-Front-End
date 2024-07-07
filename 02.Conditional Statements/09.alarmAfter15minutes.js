function alarmAfter15minutes(inputHour, inputMinutes) {

    let hours = inputHour;
    let minutes = inputMinutes + 15;

    if (inputMinutes >= 45) {

        minutes = inputMinutes + 15 - 60;

        if (inputHour === 23) {
            hours = 0;
        } else {
            hours = inputHour + 1;
        }
    }

    console.log(`${hours}:${minutes.toString().padStart(2, "0")}`);

}

alarmAfter15minutes(1, 47);
alarmAfter15minutes(0, 2);
alarmAfter15minutes(23, 59);
alarmAfter15minutes(11, 7);
alarmAfter15minutes(12, 48);