function create_song() {
    var craeteSong = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs";
    var xmlhttp =new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201){

        }
    }
    xmlhttp.open("POST",craeteSong,true);
    xmlhttp.setRequestHeader("Content-Type","application/json");
    xmlhttp.setRequestHeader("Authorization","Basic "+localStorage.getItem("token"));
}

