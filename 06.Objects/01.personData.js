function personData(firstName, lastName, age) {

    const person = {
        firstName,
        lastName,
        age,
    }

    return person;
}

console.log(personData("Ivan","Ivanov", 29)); 
console.log(personData("Maria", "Marinova", 13));

