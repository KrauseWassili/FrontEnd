function Product(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.info = function () {
        return `наименование: ${this.name}; цена: ${this.price}; описание: ${this.description}.`;
    }
}

const productArr = [];
productArr[0] = new Product("яблоко", 0.79, "происхождение - Испания");
productArr[1] = new Product("груша", 0.89, "происхождение - Абхазия");
productArr[2] = new Product("огурец", 0.33, "происхождение - Германия");


function printProdArr(productArr) {
    for (let i = 0; i < productArr.length; i++) {
        console.log(`Товар ${i+1}:`)
        for (let key in productArr[i]) {
            if (typeof productArr[i][key] === "function")
                console.log(`\t${key}: ${productArr[i].info()}`)
            else
                console.log(`\t${key}: ${productArr[i][key]}`)
        }
    }
}

printProdArr(productArr);