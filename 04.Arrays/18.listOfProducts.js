function listOfProducts(products) {

    products.sort();
    for (let i = 1; i <= products.length; i++) {
        console.log(`${i}.${products[i - 1]}`);
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);