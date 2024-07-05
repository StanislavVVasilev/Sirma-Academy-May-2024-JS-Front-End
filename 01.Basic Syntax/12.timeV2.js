function timeV2(time) {

    let hours = Math.floor(time / 60).toString().padStart(2, "0");
    let minutes = (time % 60).toString().padStart(2, "0");

    console.log(`${hours}:${minutes}`);

}

timeV2(60);
timeV2(90);
timeV2(325);