function deleteUser() {
    let userid = document.getElementById("userid").value;
    console.log("halloooo");
    console.log(userid);

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(this.readyState === this.DONE) {
            if (this.status === 200) {
                document.write(this.responseText)
            } else if (this.status == 400) {
                let response = JSON.parse(this.responseText)
                alert(response.message)
                document.getElementById("submit").disabled = false;
            }
        }
    };
    request.withCredentials = true;
    request.open("DELETE", "/auth/delete", true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send("userid=" + userid);

    document.getElementById("submit").disabled = true;
}