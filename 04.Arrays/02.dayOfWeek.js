function dayOfWeek(num) {

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    console.log(num >= 1 && num <= 7 ? days[num - 1] : "Invalid day!");
    
}

dayOfWeek(0);
dayOfWeek(1);
dayOfWeek(7);