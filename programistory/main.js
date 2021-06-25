//AJAX - LOAD XML FILES

//functions to load xml files:
function load_adaLovelace_page_1() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("al").innerHTML =
                this.responseText;
        }
    };
    request.open("GET", "contentFiles/adalovelace_page_1.xml", true);
    request.send();
}


function load_adaLovelace_page_2() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("al").innerHTML =
                this.responseText;
        }
    };
    request.open("GET", "contentFiles/adalovelace_page_2.xml", true);
    request.send();
}

function load_idaRhodes_page1() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("ida").innerHTML =
                this.responseText;
        }
    };
    request.open("GET", "contentFiles/idaRhodes_page1.xml", true);
    request.send();
}

function load_idaRhodes_page2() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("ida").innerHTML =
                this.responseText;
        }
    };
    request.open("GET", "contentFiles/idaRhodes_page2.xml", true);
    request.send();
}


function load_steveShirley_page1() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("steve").innerHTML =
                this.responseText;
        }
    };
    request.open("GET", "contentFiles/steveShirley_page_1.xml", true);
    request.send();
}

function load_steveShirley_page2() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("steve").innerHTML =
                this.responseText;
        }
    };
    request.open("GET", "contentFiles/steveShirley_page_2.xml", true);
    request.send();
}

function load_carolShaw_page1() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("carolSh").innerHTML =
                this.responseText;
        }
    };
    request.open("GET", "contentFiles/carolShaw_page_1.xml", true);
    request.send();
}

function load_carolShaw_page2() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("carolSh").innerHTML =
                this.responseText;
        }
    };
    request.open("GET", "contentFiles/carolShaw_page_2.xml", true);
    request.send();
}

//POP-UP BOX:

// Get the box
let box1 = document.getElementById("adaLovelace_content");
let box3 = document.getElementById("edithClarke_content");
let box5 = document.getElementById("eniac_content");
let box7 = document.getElementById("graceHopper_content");
let box9 = document.getElementById("idaRhodes_content");
let box11 = document.getElementById("annie_content");
let box13 = document.getElementById("evelynBoyd_content");
let box15 = document.getElementById("shirley_content");
let box17 = document.getElementById("sisterMary_content");
let box19 = document.getElementById("margaret_content");
let box21 = document.getElementById("karenJones_content");
let box23 = document.getElementById("adeleGoldberg_content");
let box25 = document.getElementById("carolShaw_content");
let box27 = document.getElementById("radiaPerlman_content");
let box29 = document.getElementById("anitaBorg_content");
let box31 = document.getElementById("barbaraLiskov_content");


// Get the button that opens the box
let btn1 = document.getElementById("adaLovelace");
let btn3 = document.getElementById("edith_clarke");
let btn5 = document.getElementById("eniac_programmers");
let btn7 = document.getElementById("graceHopper");
let btn9 = document.getElementById("idaRhodes");
let btn11 = document.getElementById("annieEasley");
let btn13 = document.getElementById("evelynBoyd");
let btn15 = document.getElementById("shirley");
let btn17 = document.getElementById("sisterMary");
let btn19 = document.getElementById("margaret");
let btn21 = document.getElementById("karen");
let btn23 = document.getElementById("adele");
let btn25 = document.getElementById("carol");
let btn27 = document.getElementById("radia");
let btn29 = document.getElementById("anita");
let btn31 = document.getElementById("barbara");


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
btn9.onclick = function () {
    box9.style.display = "block";
}
btn11.onclick = function () {
    box11.style.display = "block";
}
btn13.onclick = function () {
    box13.style.display = "block";
}
btn15.onclick = function () {
    box15.style.display = "block";
}
btn17.onclick = function () {
    box17.style.display = "block";
}
btn19.onclick = function () {
    box19.style.display = "block";
}
btn21.onclick = function () {
    box21.style.display = "block";
}
btn23.onclick = function () {
    box23.style.display = "block";
}
btn25.onclick = function () {
    box25.style.display = "block";
}
btn27.onclick = function () {
    box27.style.display = "block";
}
btn29.onclick = function () {
    box29.style.display = "block";
}
btn31.onclick = function () {
    box31.style.display = "block";
}


// // When the user clicks on <span> (x), close the box
// span.onclick = function () {
//     box1.style.display = "none";
// }
// span.onclick = function () {
//     box3.style.display = "none";
// }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === box1) {
        box1.style.display = "none";
    } else if (event.target === box3) {
        box3.style.display = "none";
    } else if (event.target === box5) {
        box5.style.display = "none";
    } else if (event.target === box7) {
        box7.style.display = "none";
    } else if (event.target === box9) {
        box9.style.display = "none";
    } else if (event.target === box11) {
        box11.style.display = "none";
    } else if (event.target === box13) {
        box13.style.display = "none";
    } else if (event.target === box15) {
        box15.style.display = "none";
    } else if (event.target === box17) {
        box17.style.display = "none";
    } else if (event.target === box19) {
        box19.style.display = "none";
    } else if (event.target === box21) {
        box21.style.display = "none";
    } else if (event.target === box23) {
        box23.style.display = "none";
    } else if (event.target === box25) {
        box25.style.display = "none";
    } else if (event.target === box27) {
        box27.style.display = "none";
    } else if (event.target === box29) {
        box29.style.display = "none";
    } else if (event.target === box31) {
        box31.style.display = "none";
    }
}
