function town(obj) {
    
    for (const key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
}


town({
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
});