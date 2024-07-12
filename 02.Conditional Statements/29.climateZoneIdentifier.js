function climate(latitude, hemisphere) {

    const absLatitude = Math.abs(latitude);

    if (absLatitude > 66.5) {
        console.log("Arctic Zone");
    } else if (absLatitude > 23.5) {
        console.log("Temperate Zone");
    } else if (absLatitude > 0) {
        console.log("Tropic Zone");
    } else {
        console.log("Equator");
    }

}

climate(70, "N");
climate(45, "S");
climate(10, "N");
climate(0, "N");
climate(-85, "S");