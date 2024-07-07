function speed(speedInfo) {

    if (speedInfo <= 10) {
        console.log("slow");
    } else if (speedInfo <= 60) {
        console.log("average");
    } else if (speedInfo <= 120) {
        console.log("fast");
    } else if (speedInfo <= 160) {
        console.log("super-fast");
    } else {
        console.log("turbo-fast");
    }

}

speed(10);
speed(59);
speed(120);
speed(121);
speed(183);
speed(59.99);
speed(60.001);