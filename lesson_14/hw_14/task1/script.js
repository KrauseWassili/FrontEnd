const arr = [14, "name", 4.55, 456,"asdf"];

function getStrings(arr) {
    let res = [];
    arr.forEach(element => {
        if (typeof (element) === 'string') {
            res.push(element);
        }
    });
    return res;
}

console.log("Оригинальный массив")
arr.forEach(element => {
    console.log(element);
});
console.log("Выводим результат")
getStrings(arr).forEach(element => {
    console.log(element);
});