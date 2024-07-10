function movieClassification(age) {

    if (age >= 18) {
        console.log("All movies");
    } else if (age >= 13) {
        console.log("U and PG-13 rated movies");
    } else {
        console.log("U-rated movies");
    }

}

movieClassification(10);
movieClassification(16);
movieClassification(21);