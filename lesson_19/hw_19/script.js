const myForm = document.getElementById("myForm");
myForm.addEventListener('submit', addUser);

const output = document.getElementById("output");


const userArr = [];
let myInnerHTML = "";

function addUser(event) {
    event.preventDefault();

    const input = document.getElementsByTagName("input");

    const user = {
        fName: input[0].value,
        lName: input[1].value,
        email: input[2].value,
    }

    console.log(user);
    userArr.push(user);

    rebuildOutput();

    input[0].value = "";
    input[1].value = "";
    input[2].value = "";

    refreshDeleteEventListener();
}

function rebuildOutput() {
    myInnerHTML = `<h2>Посетители нашего сайта:</h2><ul>`;

    for (let i = 0; i < userArr.length; i++) {
        myInnerHTML += `<li>${userArr[i].fName} ${userArr[i].lName}; Email: <a href="mailto:${userArr[i].email}">${userArr[i].email}</a> <button id="btnDelete_${i}">Удалить</button> </li>`;
    }

    myInnerHTML += `</ul>`;

    output.innerHTML = myInnerHTML;
}

function refreshDeleteEventListener() {
    for (let i = 0; i < userArr.length; i++) {
        const btnDeleteId = `btnDelete_${i}`;
        const btnDelete = document.getElementById(btnDeleteId);
        btnDelete.addEventListener("click", (e) => deleteUser(i));
        console.log(btnDelete);
    }
}


function deleteUser(num) {
    userArr.splice(num,1);
    rebuildOutput();
    refreshDeleteEventListener();
}