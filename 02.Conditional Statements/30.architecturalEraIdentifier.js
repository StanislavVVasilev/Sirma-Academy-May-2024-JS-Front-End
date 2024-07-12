function aechitecturalEra(year, material) {

    switch (material) {
        case "stone":
            if (year < 500) {
                console.log("Ancient");
            } else if (year <= 1500) {
                console.log("Medieval");
            } else {
                console.log("Uncertain");
            }
            break;
        case "wood":
            if (year >= 1500 && year <= 1800) {
                console.log("Colonial");
            } else {
                console.log("Uncertain");
            }
            break;
        case "steel":
            if (year >= 1800 && year <= 1900) {
                console.log("Industrial");
            } else if (year > 1900) {
                console.log("Modern");
            } else {
                console.log("Uncertain");
            }
            break;      
        default:
            console.log("Uncertain");
            break;
    }

}

aechitecturalEra(300, "stone");
aechitecturalEra(1500, "wood");
aechitecturalEra(1500, "stone");
aechitecturalEra(2000, "steel");
aechitecturalEra(1100, "wood");