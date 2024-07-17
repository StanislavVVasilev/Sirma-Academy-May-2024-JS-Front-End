function change(amount) {

    let coins = 0;
    
    while (amount > 0) {

        if (amount >= 2) {
            amount -= 2;
        } else if (amount >= 1) {
            amount -= 1;
        } else if (amount >= 0.5) {
            amount -= 0.5;
        } else if (amount >= 0.2) {
            amount -= 0.2;
        } else if (amount >= 0.1) {
            amount -= 0.1;
        } else if (amount >= 0.05) {
            amount -= 0.05;
        } else if (amount >= 0.02) {
            amount -= 0.02;
        } else {
            amount = 0;
        }

        coins++;
    }
    console.log(coins);
}

change(1.23);
change(2);
change(0.56);
change(2.73);