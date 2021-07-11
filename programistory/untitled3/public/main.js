//json to hide key
let apiKey = {
    key: '911ec22e-0177-4acc-80d0-0ab7766a85ff'
}

//call API, url global metrics, specify parameters using ?
request('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apiKey.key)
    .then((r1) => {  //call API, wait for server to get response, which is captured in r1
        let x1 = JSON.parse(r1.target.responseText);
        console.log(x1.data);
    }).catch(err => {
    console.log(err);
})

function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

//listings/latest
//quotes/latest
//symbol: BTC,ETH,LTC,ADA&convert=EUR
/*let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info",
    qString = "?CMC_PRO_API_KEY=" + apiKey + "&symbol=BTC";

fetch(url +qString)
    .then(function (resp){
   return resp.json();
})
    .then(function (data){
       console.log(data.data);
    });*/


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

    fetch("contentFiles/idaRhodes_page1.xml")
        .then(x => x.text())
        .then(y => document.getElementById("idaRhodes_content").innerHTML = y);
}

function load_idaRhodes_page2() {

    fetch("contentFiles/idaRhodes_page2.xml")
        .then(x => x.text())
        .then(y => document.getElementById("idaRhodes_content").innerHTML = y);
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
function closeModal() {

    let modals = document.getElementsByClassName("box");
    for (let i = 0; i < modals.length; i++) {
        let element = modals[i];
        element.style.display = "none";

    }
}

// Get the box
let box1 = document.getElementById("adaLovelace_content");
let box2 = document.getElementById("plankakuel_content");
let box3 = document.getElementById("edithClarke_content");
let box4 = document.getElementById("assembly_content");
let box5 = document.getElementById("eniac_content");
let box6 = document.getElementById("autocode_content");
let box7 = document.getElementById("graceHopper_content");
let box8 = document.getElementById("algol_content");
let box9 = document.getElementById("idaRhodes_content");
let box10 = document.getElementById("ada_content");
let box11 = document.getElementById("annie_content");
let box12 = document.getElementById("cpp_content");
let box13 = document.getElementById("evelynBoyd_content");
let box14 = document.getElementById("perl_content");
let box15 = document.getElementById("shirley_content");
let box16 = document.getElementById("haskell_content");
let box17 = document.getElementById("sisterMary_content");
let box18 = document.getElementById("python_content");
let box19 = document.getElementById("margaret_content");
let box20 = document.getElementById("visualbasic_content");
let box21 = document.getElementById("karenJones_content");
let box22 = document.getElementById("ruby_content");
let box23 = document.getElementById("adeleGoldberg_content");
let box24 = document.getElementById("javascript_content");
let box25 = document.getElementById("carolShaw_content");
let box26 = document.getElementById("php_content");
let box27 = document.getElementById("radiaPerlman_content");
let box28 = document.getElementById("csharp_content");
let box29 = document.getElementById("anitaBorg_content");
let box30 = document.getElementById("go_content");
let box31 = document.getElementById("barbaraLiskov_content");
let box32 = document.getElementById("kotlin_content");


// Get the button that opens the box
let btn1 = document.getElementById("adaLovelace");
let btn2 = document.getElementById("plankakuel");
let btn3 = document.getElementById("edith_clarke");
let btn4 = document.getElementById("assembly");
let btn5 = document.getElementById("eniac_programmers");
let btn6 = document.getElementById("autocode");
let btn7 = document.getElementById("graceHopper");
let btn8 = document.getElementById("algol");
let btn9 = document.getElementById("idaRhodes");
let btn10 = document.getElementById("ada");
let btn11 = document.getElementById("annieEasley");
let btn12 = document.getElementById("cpp");
let btn13 = document.getElementById("evelynBoyd");
let btn14 = document.getElementById("perl");
let btn15 = document.getElementById("shirley");
let btn16 = document.getElementById("haskell");
let btn17 = document.getElementById("sisterMary");
let btn18 = document.getElementById("python");
let btn19 = document.getElementById("margaret");
let btn20 = document.getElementById("visualbasic");
let btn21 = document.getElementById("karen");
let btn22 = document.getElementById("ruby");
let btn23 = document.getElementById("adele");
let btn24 = document.getElementById("javascript");
let btn25 = document.getElementById("carol");
let btn26 = document.getElementById("php");
let btn27 = document.getElementById("radia");
let btn28 = document.getElementById("csharp");
let btn29 = document.getElementById("anita");
let btn30 = document.getElementById("go");
let btn31 = document.getElementById("barbara");
let btn32 = document.getElementById("kotlin");


// Get the <span> element that closes the box
let span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the box
btn1.onclick = function () {
    box1.style.display = "block";
}

btn2.onclick = function () {
    box2.style.display = "block";
}

btn3.onclick = function () {
    box3.style.display = "block";
}

btn4.onclick = function () {
    box4.style.display = "block";
}

btn5.onclick = function () {
    box5.style.display = "block";
}
btn6.onclick = function () {
    box6.style.display = "block";
}
btn7.onclick = function () {
    box7.style.display = "block";
}
btn8.onclick = function () {
    box8.style.display = "block";
}
btn9.onclick = function () {
    box9.style.display = "block";
}
btn10.onclick = function () {
    box10.style.display = "block";
}
btn11.onclick = function () {
    box11.style.display = "block";
}
btn12.onclick = function () {
    box12.style.display = "block";
}
btn13.onclick = function () {
    box13.style.display = "block";
}
btn14.onclick = function () {
    box14.style.display = "block";
}
btn15.onclick = function () {
    box15.style.display = "block";
}
btn16.onclick = function () {
    box16.style.display = "block";
}
btn17.onclick = function () {
    box17.style.display = "block";
}
btn18.onclick = function () {
    box18.style.display = "block";
}
btn19.onclick = function () {
    box19.style.display = "block";
}
btn20.onclick = function () {
    box20.style.display = "block";
}
btn21.onclick = function () {
    box21.style.display = "block";
}
btn22.onclick = function () {
    box22.style.display = "block";
}
btn23.onclick = function () {
    box23.style.display = "block";
}
btn24.onclick = function () {
    box24.style.display = "block";
}
btn25.onclick = function () {
    box25.style.display = "block";
}
btn26.onclick = function () {
    box26.style.display = "block";
}
btn27.onclick = function () {
    box27.style.display = "block";
}
btn28.onclick = function () {
    box28.style.display = "block";
}
btn29.onclick = function () {
    box29.style.display = "block";
}
btn30.onclick = function () {
    box30.style.display = "block";
}
btn31.onclick = function () {
    box31.style.display = "block";
}
btn32.onclick = function () {
    box32.style.display = "block";
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
    } else if (event.target === box2) {
        box2.style.display = "none";
    } else if (event.target === box3) {
        box3.style.display = "none";
    } else if (event.target === box4) {
        box4.style.display = "none";
    } else if (event.target === box5) {
        box5.style.display = "none";
    } else if (event.target === box6) {
        box6.style.display = "none";
    } else if (event.target === box7) {
        box7.style.display = "none";
    } else if (event.target === box8) {
        box8.style.display = "none";
    } else if (event.target === box9) {
        box9.style.display = "none";
    } else if (event.target === box10) {
        box10.style.display = "none";
    } else if (event.target === box11) {
        box11.style.display = "none";
    } else if (event.target === box12) {
        box12.style.display = "none";
    } else if (event.target === box13) {
        box13.style.display = "none";
    } else if (event.target === box14) {
        box14.style.display = "none";
    } else if (event.target === box15) {
        box15.style.display = "none";
    } else if (event.target === box16) {
        box16.style.display = "none";
    } else if (event.target === box17) {
        box17.style.display = "none";
    } else if (event.target === box18) {
        box18.style.display = "none";
    } else if (event.target === box19) {
        box19.style.display = "none";
    } else if (event.target === box20) {
        box20.style.display = "none";
    } else if (event.target === box20) {
        box22.style.display = "none";
    } else if (event.target === box21) {
        box21.style.display = "none";
    } else if (event.target === box22) {
        box22.style.display = "none";
    } else if (event.target === box23) {
        box23.style.display = "none";
    } else if (event.target === box24) {
        box24.style.display = "none";
    } else if (event.target === box25) {
        box25.style.display = "none";
    } else if (event.target === box26) {
        box26.style.display = "none";
    } else if (event.target === box27) {
        box27.style.display = "none";
    } else if (event.target === box28) {
        box28.style.display = "none";
    } else if (event.target === box29) {
        box29.style.display = "none";
    } else if (event.target === box30) {
        box30.style.display = "none";
    } else if (event.target === box31) {
        box31.style.display = "none";
    } else if (event.target === box32) {
        box32.style.display = "none";
    }
}
