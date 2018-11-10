var login = "https://2-dot-backup-server-001.appspot.com/_api/v2/members/authentication";

var btn = document.forms["Login-form"]["btn"];
btn.onclick = function () {
    var txt_email = document.forms["Login-form"]["email"];
    var txt_pwd = document.forms["Login-form"]["password"];

    var email = txt_email.value;
    var password = txt_pwd.value;
    var jsonObj = {
        email: email,
        password: password
    };
    console.log(jsonObj);
    var data = JSON.stringify(jsonObj);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            var member = JSON.parse(xhttp.responseText);
            console.log(member.token);
            localStorage.setItem("token" ,member.token);
            window.location.replace("GetSongs.html");
        }
    };
    xhttp.open("POST", login, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
};