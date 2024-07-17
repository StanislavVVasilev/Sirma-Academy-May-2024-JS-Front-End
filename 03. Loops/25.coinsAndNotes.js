function coinsAndNotes(coins1Lev, coins2Leva, banknotes5Leva, sum) {

    for (let i = 0; i <= coins1Lev; i++) {
        for (let j = 0; j <= coins2Leva; j++) {
            for (let k = 0; k <= banknotes5Leva; k++) {
                if ((i * 1) + (j * 2) + (k * 5) === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                    break;
                }
            }
        }
    }
}

coinsAndNotes(3, 2, 3, 10);
coinsAndNotes(5, 3, 1, 7);