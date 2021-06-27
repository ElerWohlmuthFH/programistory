function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(this.readyState === this.DONE) {
            if (this.status === 200) {
                let response = JSON.parse(this.responseText)

                console.log(response)
                console.log(this.responseText)

                if(response.loggedin == true){
                     window.location = "/";
                }
            } else if (this.status == 400) {
                let response = JSON.parse(this.responseText)
                console.log(response)
                console.log(this.responseText)
                alert(response.message)
            }
            document.getElementById("submit").disabled = false;
        }
    };
    request.open("POST", "/auth/login", true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send("email=" + email + "&password=" + password);

    document.getElementById("submit").disabled = true;
}