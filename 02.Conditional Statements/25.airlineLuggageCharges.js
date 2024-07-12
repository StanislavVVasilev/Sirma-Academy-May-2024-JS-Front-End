function luggageCharges(weight, dimensions) {

    let charges = 0;

    if (weight > 50) {
        charges += 100;
    }

    if (dimensions > 158) {
        let diff = dimensions - 158;

        if (diff <= 20) {
            charges += 50;
        } else if (diff <= 50) {
            charges += 100;
        } else {
            charges += 200;
        }
    }

    if (weight > 50 && dimensions > 158) {
        charges +=50;
    }

    console.log(`$${charges}`);

}

luggageCharges(52, 160);
luggageCharges(48, 180);
luggageCharges(55, 190);