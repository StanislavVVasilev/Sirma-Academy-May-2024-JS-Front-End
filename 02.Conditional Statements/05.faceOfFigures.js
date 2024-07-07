function area(figure, sideA, sideB) {

    let area;

    if (figure == "square") {
        area = Math.pow(sideA, 2);
    } else if (figure == "rectangle") {
        area = sideA * sideB;
    } else if (figure == "triangle") {
        area = sideA * sideB / 2;
    } else {
        let radius = sideA;
        area = Math.PI * Math.pow(radius, 2);
    }

    console.log(area.toFixed(2));

}

area("square", 5);
area("rectangle", 10, 3.5);
area("triangle", 4.5, 20);
area("circle", 10);