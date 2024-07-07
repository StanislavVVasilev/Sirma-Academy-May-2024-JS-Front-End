function dayOfTheWeek(num) {

    let dayInWords;

    switch (num) {
        case 1:
            dayInWords = "Monday"
            break;
        case 2:
            dayInWords = "Tuesday"
            break;
        case 3:
            dayInWords = "Wednesday"
            break;
        case 4:
            dayInWords = "Thursday"
            break;
        case 5:
            dayInWords = "Friday"
            break;
        case 6:
            dayInWords = "Saturday"
            break;
        case 7:
            dayInWords = "Sunday"
            break;
        default:
            dayInWords = "Error"
            break;
    }

    console.log(dayInWords);
}

dayOfTheWeek(1);
dayOfTheWeek(2);
dayOfTheWeek(3);
dayOfTheWeek(4);
dayOfTheWeek(5);
dayOfTheWeek(6);
dayOfTheWeek(7);
dayOfTheWeek(8);