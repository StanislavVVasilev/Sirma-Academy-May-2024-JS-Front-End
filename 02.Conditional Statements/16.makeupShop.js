function makeupShop(renovationPrice, powdersCount, lipsticksCount, spiralsCount, shadowsCount, correctorsCount) {

    const isHasDiscount = powdersCount + lipsticksCount + spiralsCount + shadowsCount + correctorsCount >= 50;

    const powderRevenue = 2.6 * powdersCount;
    const lipstickRevenue = 3 * lipsticksCount;
    const spiralRevenue = 4.1 * spiralsCount;
    const shadowsRevenue = 8.2 * shadowsCount;
    const concealerRevenue = 2 * correctorsCount;

    let moneyEarned = (powderRevenue + lipstickRevenue + spiralRevenue + shadowsRevenue + concealerRevenue) * 0.9;

    if (isHasDiscount) {
        moneyEarned *= 0.75;
    }

    const diff = Math.abs(moneyEarned - renovationPrice).toFixed(2);

    const isMoneyEnough = moneyEarned >= renovationPrice;

    if (isMoneyEnough) {
        console.log(`Yes! ${diff} BGN left.`);
    } else {
        console.log(`Not enough money! ${diff} BGN needed.`);
    }
}

makeupShop(40.8, 20, 25, 30, 50, 10);
makeupShop(320, 8, 2, 5, 5, 1);