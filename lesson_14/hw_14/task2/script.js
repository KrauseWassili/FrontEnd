const arr1 = [15, "name1", 4.55, 123,];

const arr2 = [16, "name2", 5.55, 456,];

const array = [17, "name3", 6.55, 789, arr1, arr2];

function getStrings(arr) {
    let res = [];
    arr.forEach(element => {
        if (typeof (element) === 'string') {
            res.push(element);
        } 
        else if(Array.isArray(element)){
           element.forEach(element1 => {
           if (typeof(element1) === 'string')
                  res.push(element1);

           });
        }
    });
    return res;
}

console.log("Оригинальный массив")
array.forEach(element => {
    console.log(element);
});

console.log("Выводим результат")
getStrings(array).forEach(element => {
    console.log(element);
});