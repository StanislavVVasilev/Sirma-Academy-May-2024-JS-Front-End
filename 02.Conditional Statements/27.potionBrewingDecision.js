function potion(firstIngredient, secondIngredient) {

    switch (firstIngredient) {
        case "herbs":
            switch (secondIngredient) {
                case "water":
                    console.log("Health potion");
                    break;
                case "oil":
                    console.log("Stealth potion");
                    break;           
                default:
                    console.log("Minor stamina potion");
                    break;
            }
            break;
        case "berries":
            switch (secondIngredient) {
                case "sugar":
                    console.log("Speed potion");
                    break;
                default:
                    console.log("Minor energy potion");
                    break;
            }
            break;
        default:
            console.log("No potion");
            break;
    }

}

potion("herbs", "water");
potion("herbs", "oil");
potion("herbs", "banana");
potion("berries", "sugar");
potion("berries", "banana");
potion("herbs", "sugar");
potion("sugar", "salt");