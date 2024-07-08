function gradeCalculator(percentages) {

    let grade;

    if (percentages >= 90 && percentages <= 100) {
        grade = "A";
    } else if (percentages >= 80) {
        grade = "B";
    } else if (percentages >= 70) {
        grade = "C";
    } else if (percentages >= 60) {
        grade = "D";
    } else if (percentages >= 0) {
        grade = "F";
    }

    console.log(grade);
}

gradeCalculator(95);
gradeCalculator(82);
gradeCalculator(76);
gradeCalculator(65);
gradeCalculator(45);