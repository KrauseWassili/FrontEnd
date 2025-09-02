let tick = 0;
let sec = 0;
let speedValue = 3;

const card = document.getElementById("card");


const img = document.createElement("img");
img.alt = "Изображение собаки";
img.src = "";
card.appendChild(img);

const output = document.getElementById("output");
output.innerText = speedValue + "сек";

const btnMinus = document.getElementById("btnMinus");
btnMinus.addEventListener("click", speedDown);

const btnPlus = document.getElementById("btnPlus");
btnPlus.addEventListener("click", speedUp);




function loadImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("ошибка загрузки данных");
            }

        })
        .then(loadedObject => {
            img.src = loadedObject.message;
        }

        )
        .catch(
            e => console.log(e)
        );
}


function speedDown() {
    if (speedValue > 1)
        speedValue --;
    output.innerText = speedValue + " сек";
    
}

function speedUp() {
    if(speedValue <10)
    speedValue ++;
    output.innerText = speedValue + " сек";
    
}

requestAnimationFrame(frame);

function frame (){
    tick++;
    if(tick>=60) {
        tick=0;
        sec++;
    }
    if(sec>=speedValue){
        loadImage();
        sec=0;
    }
    requestAnimationFrame(frame);
}
