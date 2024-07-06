function journey(speedFirstCar, speedSecondCar) {
    let firstCarPassedKm = speedFirstCar * 5;
    let secondCarPassedKm = speedSecondCar * 3;
    let distanceBetweenCars = Math.abs(firstCarPassedKm - secondCarPassedKm);

    console.log(distanceBetweenCars);
}

journey(81, 120);
journey(100, 90);
journey(75, 90);