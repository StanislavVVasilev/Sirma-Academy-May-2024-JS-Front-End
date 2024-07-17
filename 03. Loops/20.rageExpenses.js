function rageExpenses(lostGames, headsetPrice, mousePrice, keyboardPrice, displayPrice) {

    let totalExpenses = 0;

    for (let loses = 1; loses <= lostGames; loses++) {
        
        if (loses % 2 === 0) {
            totalExpenses += headsetPrice;
        }

        if (loses % 3 === 0) {
            totalExpenses += mousePrice;
        }

        if (loses % 6 === 0) {
            totalExpenses += keyboardPrice;
        }

        if (loses % 12 === 0) {
            totalExpenses += displayPrice;
        }
        
    }
    console.log(`Rage expenses: ${totalExpenses.toFixed(2)} lv.`);
}

rageExpenses(7, 2, 3, 4, 5);
rageExpenses(23, 12.50, 21.50, 40, 200);