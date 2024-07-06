function office(firstCabinetPrice) {

    let secondCabinetPrice = firstCabinetPrice * 0.8;
    let thirdCabinetPrice = (firstCabinetPrice + secondCabinetPrice) * 1.15;
    let totalCostAllCabinets = firstCabinetPrice + secondCabinetPrice + thirdCabinetPrice;

    console.log(totalCostAllCabinets.toFixed(3));
}

office(380);
office(720.50);
office(455.30);