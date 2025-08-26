let cover = document.getElementById("cover");
console.log(cover);


setInterval(increaseTop, 10);
let top1 = 0;
function increaseTop() {
    if (top1 < 100) {
        top1 += 0.1;
        topString = top1 + "vh";
        console.log(top1);
        console.log(topString);
        cover.style.top = topString;
    }
}

