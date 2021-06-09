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

//POP-UP BOX:

// Get the box
var box1 = document.getElementById("adaLovelace_content");
var box2 = document.getElementById("graceHopper_content");

// Get the button that opens the box
var btn = document.getElementById("adaLovelace");
var btn2 = document.getElementById("graceHopper");


// Get the <span> element that closes the box
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the box
btn.onclick = function () {
    box1.style.display = "block";
}

btn2.onclick = function () {
    box2.style.display = "block";
}


// When the user clicks on <span> (x), close the box
span.onclick = function () {
    box1.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == box1) {
        box1.style.display = "none";
    }

    if (event.target == box2) {
        box2.style.display = "none";
    }
}