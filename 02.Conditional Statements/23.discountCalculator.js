function discountCalculator(age, membership) {

    let percentageDiscount = 10;

    if (age >= 65) {
        percentageDiscount = 30;
    } else if (age >= 18 ) {
        if (membership === "Yes") {
            percentageDiscount = 20;
        }
    } 

    console.log(`${percentageDiscount}% discount`);
}

discountCalculator(20, "Yes");
discountCalculator(15, "No");
discountCalculator(70, "No");