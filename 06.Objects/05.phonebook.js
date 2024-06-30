function phonebook(arr) {

    const phonebook = {};
    for (const record of arr) {
        const [name, ...phoneNumber] = record.split(" ");
        phonebook[name] = phoneNumber.join(" ");
    }

    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
    
}

phonebook(
    ["Peter 0888 657 212",
    "Bob 0899 657 212",
    "Peter 123123"]
);

phonebook(
    ["Maria 123",
    "Samantha 456",
    "Nicole 789"]  
);