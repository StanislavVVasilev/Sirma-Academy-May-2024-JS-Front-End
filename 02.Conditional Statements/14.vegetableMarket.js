function vegetableMarket(vegetable, dayOfWeek, quantity) {

    let price;

    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        switch (vegetable) {
            case "tomato":
                price = 2.8;
                break;
            case "onion":
                price = 1.3;
                break;
            case "lettuce":
                price = 0.85;
                break;
            case "cucumber":
                price = 1.75;
                break;
            case "pepper":
                price = 3.5;
                break;
            default:
                price = "error";
                break;
        }
    } else if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
        switch (vegetable) {
            case "tomato":
                price = 2.5;
                break;
            case "onion":
                price = 1.2;
                break;
            case "lettuce":
                price = 0.85;
                break;
            case "cucumber":
                price = 1.45;
                break;
            case "pepper":
                price = 5.5;
                break;
            default:
                price = "error";
                break;
        }
    } else {
        price = "error";
    }

    if (price !== "error") {
        let result = price * quantity;
        console.log(result.toFixed(2));
    } else {
        console.log(price);
    }
    

}

vegetableMarket("tomato", "Tuesday", 2);
vegetableMarket("onion", "Sunday", 3);
vegetableMarket("pepper", "Monday", 10);
vegetableMarket("banana", "Friday", 5);