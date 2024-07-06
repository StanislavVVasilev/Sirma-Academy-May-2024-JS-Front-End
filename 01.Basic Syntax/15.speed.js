function speed(distance, hours, minutes, seconds) {

    let minutesInSeconds = minutes * 60;
    let hoursInSeconds = hours * 60 * 60;
    let speedInMetersPerSeconds = distance / (minutesInSeconds + hoursInSeconds + seconds);
    
    console.log(speedInMetersPerSeconds.toFixed(6));

}

speed(100, 1, 20, 20);
speed(2500, 5, 56, 23);
speed(600, 7, 35, 55);