function adventureGame(firstTool, secondTool) {

    if (firstTool === "sword") {
        if (secondTool === "shield") {
            console.log("Path to the castle");
        } else {
            console.log("Path to the forest");
        }
    } else if (firstTool === "map") {
        if (secondTool === "coins") {
            console.log("Go to the town");
        } else {
            console.log("Camp");
        }
    } else {
        console.log("Wander aimlessly");
    }
}

adventureGame("sword", "shield");
adventureGame("map", "coins");
adventureGame("torch", "flower");
adventureGame("sword", "pouch");
adventureGame("map", "compass");