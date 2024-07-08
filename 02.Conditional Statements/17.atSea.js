function atSea(daysToStay, roomType, assessment) {

    let priceToStay;

    const singleRoomPrice = 25;
    const apartmentPrice = 50;
    const presidentialPrice = 100;
    const isPositiveAssessment = assessment === "positive";
    const nightsPerStay = daysToStay - 1;

    switch (roomType) {
        case "single room":
            priceToStay = singleRoomPrice * nightsPerStay;
            break;
        case "apartment":
            if (daysToStay < 10) {
                priceToStay = apartmentPrice * 0.7 * nightsPerStay;
            } else if (daysToStay <= 15) {
                priceToStay = apartmentPrice * 0.65 * nightsPerStay;
            } else {
                priceToStay = apartmentPrice * 0.5 * nightsPerStay;
            } 
            break;
        case "presidential":
            if (daysToStay < 10) {
                priceToStay = presidentialPrice * 0.9 * nightsPerStay;
            } else if (daysToStay <= 15) {
                priceToStay = presidentialPrice * 0.85 * nightsPerStay;
            } else {
                priceToStay = presidentialPrice * 0.8 * nightsPerStay;
            } 
            break;
    }

    if (isPositiveAssessment) {
        priceToStay *= 1.25;
    } else {
        priceToStay *= 0.9;
    }

    console.log(`${priceToStay.toFixed(2)}`);


}

atSea(11, "apartment", "positive");
atSea(30, "presidential", "negative");
atSea(12, "single room", "positive");
atSea(2, "apartment", "positive");