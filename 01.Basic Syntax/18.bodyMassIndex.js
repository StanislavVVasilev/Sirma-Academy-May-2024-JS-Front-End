function bodyMassIndex(weight, height) {
    let bmi = weight / Math.pow(height, 2);

    console.log(Math.floor(bmi * 100) / 100);
}

bodyMassIndex(70, 1.73);
bodyMassIndex(60, 1.75);
bodyMassIndex(85, 1.80);