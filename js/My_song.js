function getMySong() {
    var mySong = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-mine";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

        }
    }
    xhttp.open("GET",mySong,true);
    xhttp.setRequestHeader("Authorization","Basic "+localStorage.getItem("token"));
    xhttp.send();
}