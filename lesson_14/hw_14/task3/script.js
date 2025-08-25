let input = prompt("введите число:");

let num = Number(input);

if (!Number.isInteger(num)) {
    !console.log("Ошибка!");
} else {

    let res = [];

    if (num === 0) {
        res[0] = 0;
    }

    while (num > 0) {
        res.unshift(num)
        num = (num - res[0]) / 10;
    }

    console.log(res);
}
