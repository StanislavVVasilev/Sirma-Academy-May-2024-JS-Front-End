function convertToObj(jsonText) {

    const obj = JSON.parse(jsonText);

    for (const entry in obj) {
        console.log(`${entry}: ${obj[entry]}`);
    }
    
}

convertToObj('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertToObj('{"firstName": "Ivan", "lastName": "Ivanov"}');