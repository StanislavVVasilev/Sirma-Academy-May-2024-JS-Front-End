function calcTime(time) {
    
    let hours = Math.floor(time / 60);
    let minutes = time % 60;

    console.log(hours + ":" + minutes);

}

calcTime(60);
calcTime(90);
calcTime(325);