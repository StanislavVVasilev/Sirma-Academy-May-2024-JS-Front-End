function movieTicket(age) {

    let price;

    if (age >= 0 && age <= 12) {
        price = 5;
    } else if (age <= 19) {
        price = 8;
    } else {
        price = 10;
    }

    console.log(`$${price}`);
}

movieTicket(10);
movieTicket(16);
movieTicket(25);
movieTicket(13);