function newBuilding(floors, rooms) {
    
    for (let i = floors; i >= 1; i--) {

        let floor = "";

        for (let j = 0; j < rooms; j++) {

            floor += `A${i}${j} `;

            if (i === floors) {
                floor = floor.replace("A", "L");
            } else if (i % 2 === 0) {
                floor = floor.replace("A", "O");
            }
        }

        console.log(floor);
        
    }
}

newBuilding(6, 4);
newBuilding(3, 3);
newBuilding(4, 4);