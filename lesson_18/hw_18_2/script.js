function Account(iban, owner, balance) {
    this.iban = iban;
    this.owner = owner;
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount;
    }
    this.withdraw = function (amount) {
        if (this.balance >= amount)
            this.balance -= amount;
    }
    this.getBalance = function () {
        return this.balance;
    }
}

const accArr = [];

accArr[0] = new Account(12345, "John", 123.123);
accArr[1] = new Account(34567, "Peter", 456.456);
accArr[2] = new Account(56789, "Anna", 789.789);


function print() {
    for (let i = 0; i < accArr.length; i++) {
        console.log(`Счет № ${i + 1}:`)
        for (let key in accArr[i]) {
            if (typeof accArr[i][key] !== "function")
                console.log(`\t${key}: ${accArr[i][key]}`)
        }
    }
}

print();

function transfer(account1, account2, amount) {
    if (account1.balance >= amount) {
        account1.withdraw(amount);
        account2.deposit(amount);

        return {
            account1: account1,
            account2: account2,
            amount: amount,
            transactionInfo: function () {
                console.log(`Transaction iban1: ${account1.iban} to iban2: ${account2.iban}; amount: ${this.amount} successfully! `);                
            }
        }
    } else {
        return {
            account1: account1,
            account2: account2,
            amount: amount,
            error: "Not enough funds in the account.",
            transactionInfo: function () {
                console.log(`Transaction iban1: ${account1.iban} to iban2: ${account2.iban}; amount: ${this.amount} fail. Error: ${this.error}`);                
            }
        }
        
    }
}


transfer(accArr[0], accArr[1], 122).transactionInfo();




/*
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


function printProdArr() {
    for (let i = 0; i < productArr.length; i++) {
        console.log(`Товар ${i+1}:`)
        for (let key in productArr[i]) {
            if (key === "info")
                console.log(`${key}: ${productArr[i].info()}`)
            else
                console.log(`${key}: ${productArr[i][key]}`)
        }
    }
}

printProdArr();
*/