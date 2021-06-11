//AJAX - LOAD XML FILES

function load_adalovelace_page_1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("al").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "adalovelace_page_1.xml", true);
    xhttp.send();
}


function load_adalovelace_page_2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("al").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "adalovelace_page_2.xml", true);
    xhttp.send();
}

/*function load_gracehopper_page_1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("graceHopper_content").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "adalovelace_page_1.xml", true);
    xhttp.send();
}*/

//POP-UP BOX:

// Get the box
let box1 = document.getElementById("adaLovelace_content");
let box3 = document.getElementById("edithClarke_content");
let box5 = document.getElementById("eniac_content");
let box7 = document.getElementById("graceHopper_content");


// Get the button that opens the box
let btn1 = document.getElementById("adaLovelace");
let btn3 = document.getElementById("edith_clarke");
let btn5 = document.getElementById("eniac_programmers");
let btn7 = document.getElementById("graceHopper");


// Get the <span> element that closes the box
let span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the box
btn1.onclick = function () {
    box1.style.display = "block";
}

btn3.onclick = function () {
    box3.style.display = "block";
}

btn5.onclick = function () {
    box5.style.display = "block";
}
btn7.onclick = function () {
    box7.style.display = "block";
}


// When the user clicks on <span> (x), close the box
span.onclick = function () {
    box1.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === box1) {
        box1.style.display = "none";
    }

    if (event.target === box3) {
        box3.style.display = "none";
    }

    if (event.target === box5) {
        box5.style.display = "none";
    }
    if (event.target === box7) {
        box7.style.display = "none";
    }
}