function holiday(budget, season) {

    let typeOfHoliday;
    let destination;
    let amount;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                typeOfHoliday = "Camp";
                amount = budget * 0.3;
                break;
            case "winter":
                typeOfHoliday = "Hotel";
                amount = budget * 0.7;
                break;
        }

    } else if (budget <= 1000) {
        destination = "Europe";
        switch (season) {
            case "summer":
                typeOfHoliday = "Camp";
                amount = budget * 0.4;
                break;
            case "winter":
                typeOfHoliday = "Hotel";
                amount = budget * 0.8;
                break;
        }


    } else {
        destination = "Asia";
        typeOfHoliday = "Hotel";
        amount = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfHoliday} - ${amount.toFixed(2)}`);

}

holiday(50, "summer");
holiday(75, "winter");
holiday(312, "summer");
holiday(678.53, "winter");
holiday(1500, "summer");