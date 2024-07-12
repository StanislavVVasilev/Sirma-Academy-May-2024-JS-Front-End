function survival(timeOfDay, environment, items) {

    const isDay = timeOfDay === "day";
    const isForest = environment === "forest";

    if (isDay) {
        if (isForest) {
            switch (items) {
                case "knife":
                    console.log("Hunt for food");
                    break;
                case "container":
                    console.log("Collect berries");
                    break;
                default:
                    console.log("Explore");
                    break;
            }
        } else {
            switch (items) {
                case "hat":
                    console.log("Search for water");
                    break;
                default:
                    console.log("Find shade");
                    break;
            }
        }

    } else {
        if (isForest) {
            switch (items) {
                case "firestarter":
                    console.log("Make a campfire");
                    break;
                default:
                    console.log("Climb on a tree");
                    break;
            }
        } else {
            switch (items) {
                case "blanket":
                    console.log("Sleep");
                    break;
                default:
                    console.log("Keep moving to stay warm");
                    break;
            }
        }
    }
}

survival("day", "forest", "knife");
survival("day", "forest", "container");
survival("night", "forest", "firestarter");
survival("day", "forest", "bag");
survival("night", "desert", "blanket");
survival("day", "desert", "hat");
survival("night", "desert", "sword");
survival("night", "forest", "hat");