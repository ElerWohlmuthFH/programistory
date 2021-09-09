//inst classes

const ft = new Fetch();
const ui = new Userinterface();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    const currentVal = search.value;
//whenever submit is hit a new value is captured
    //.then to access data
    ft.getCurrent(currentVal).then((data) => {
        //call a UI method//
        ui.populateUI(data);
        //call saveToLS
        ui.saveToLS(data);
    });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = ui.getFromLS();
    ui.populateUI(dataSaved);
});