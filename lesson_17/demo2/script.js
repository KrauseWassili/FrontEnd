// события мышки

let root = document.getElementById("root");
let root1 = document.getElementById("root1");
root.addEventListener('click',() => console.log("кликнули мышкой"));
root.addEventListener('click',(e) => console.log(e));
root.addEventListener('click',(e) => e.target.style.background="red");


//root1.addEventListener('click',() => console.log("кликнули мышкой(BL1)"));
