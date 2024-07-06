function consoleConverter(euro) {

    let conversionRate = 1.95583
    let leva = euro * conversionRate;

    console.log(leva.toFixed(2));
}

consoleConverter(1);
consoleConverter(15);
consoleConverter(123);
consoleConverter(0.5);
consoleConverter(0.51);