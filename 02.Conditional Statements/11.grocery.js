function grocery(product, city, quantity) {

    let price;

    if (city === "Sofia") {
        if (product === "tea") {
            price = 0.5;
        } else if (product === "water") {
            price = 0.8;
        } else if (product === "juice") {
            price = 1.2;
        } else if (product === "sweets") {
            price = 1.45;
        } else {
            price = 1.60;
        }

    } else if (city === "Plovdiv") {
        if (product === "tea") {
            price = 0.4;
        } else if (product === "water") {
            price = 0.7;
        } else if (product === "juice") {
            price = 1.15;
        } else if (product === "sweets") {
            price = 1.3;
        } else {
            price = 1.50;
        }

    } else {
        if (product === "tea") {
            price = 0.45;
        } else if (product === "water") {
            price = 0.7;
        } else if (product === "juice") {
            price = 1.1;
        } else if (product === "sweets") {
            price = 1.35;
        } else {
            price = 1.55;
        }

    }

    let totalPrice = price * quantity;

    console.log(totalPrice.toFixed(2));

}

grocery("tea", "Varna", 2);
grocery("chips", "Plovdiv", 1);
grocery("juice", "Sofia", 6);
grocery("sweets", "Plovdiv", 1);