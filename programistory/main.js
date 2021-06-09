// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("demo").innerHTML =
//                 this.responseText;
//         }
//     };
//     xhttp.open("GET", "main.xml", true);
//     xhttp.send();
// }


// Get the modal
var box1 = document.getElementById("adaLovelace_content");
var box2 = document.getElementById("graceHopper_content");

// Get the button that opens the modal
var btn = document.getElementById("adaLovelace");
var btn2 = document.getElementById("graceHopper");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




// When the user clicks the button, open the modal
btn.onclick = function() {
    box1.style.display = "block";
}

btn2.onclick = function() {
    box2.style.display = "block";
}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    box1.style.display = "none";
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == box1) {
        box1.style.display = "none";
    }

    if (event.target == box2) {
        box2.style.display = "none";
    }
}