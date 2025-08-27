const int_box = document.getElementById("int_box");
const ext_box = document.getElementById("ext_box");

const int_width = int_box.offsetWidth;
const int_height = int_box.offsetHeight;

const ext_width = ext_box.offsetWidth;
const ext_height = ext_box.offsetHeight;


const keyUp = document.addEventListener("keydown", e => {    
    if (e.key == "ArrowUp") {
        moveUp();
        setProp();
    }
    if (e.key == "ArrowDown") {
        moveDown();
        setProp();
    }
    if (e.key == "ArrowLeft") {
        moveLeft();
        setProp();
    }
    if (e.key == "ArrowRight") {
        moveRight();
        setProp();
    }
});


const move_step = 100;

let x_offset = 0;
let y_offset = 0;

const btnUp = document.getElementById("btnUp").addEventListener("click", moveUp);
const btnDown = document.getElementById("btnDown").addEventListener("click", moveDown);
const btnLeft = document.getElementById("btnLeft").addEventListener("click", moveLeft);
const btnRight = document.getElementById("btnRight").addEventListener("click", moveRight);

const buttons = document.getElementById("buttons").addEventListener("click", setProp);



function moveUp() {
    if (y_offset >= int_height)
        y_offset -= move_step;
};
function moveDown() {
    if (y_offset < ext_height - int_height)
        y_offset += move_step;
};
function moveLeft() {
    if (x_offset >= int_width)
        x_offset -= move_step;
};
function moveRight() {
    if (x_offset < ext_width - int_width)
        x_offset += move_step;
};

function setProp() {
    int_box.style.setProperty("left", x_offset + "px");
    int_box.style.setProperty("top", y_offset + "px");
};