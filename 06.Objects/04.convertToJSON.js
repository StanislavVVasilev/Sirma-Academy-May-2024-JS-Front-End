function convertToJSON(name, surname, eyeColor) {

    let person = {
        name,
        lastName: surname,
        eyeColor,
    };

    const personToJSON = JSON.stringify(person);

    console.log(personToJSON);
    
}

convertToJSON("Ivan", "Ivanov", "blue");
convertToJSON("Maria", "Petrova", "brown");