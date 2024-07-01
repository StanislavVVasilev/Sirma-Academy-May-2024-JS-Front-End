function progressBar(num) {

    let progressBarCount = num / 10;

    if (num !== 100) {
        console.log(`${num}% [${"%".repeat(progressBarCount)}${".".repeat(10 - progressBarCount)}]`);
        console.log(`Loading...`);
    } else {
        console.log(`[%%%%%%%%%%]`);
        console.log(`Complete!`);
    }

}

progressBar(30);
progressBar(50);
progressBar(100);