getMusic();
var music_content = document.getElementById("content");
var play_song = document.getElementById("play");
function getMusic() {
    var APIurl = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(xmlHttp.responseText);
            var obj = JSON.parse(xmlHttp.responseText);
            for (var i = 0; i < obj.length; i++) {
                var music_item= '<li>';
                music_item += '<label class="id"> ' + (i+1) + '</label>';
                music_item += '<span>';
                music_item += '<img height="70px" onclick="PlayMusic(\''+obj[i].link +'\')" src="'+ obj[i].thumbnail +'" alt="">';
                music_item += '</span>';
                music_item += '<label class="name">'+ obj[i].name + '</label>';
                music_item += '</li>';
                music_content.innerHTML += music_item;
            }

        }

    };
    xmlHttp.open("GET", APIurl, true);
    xmlHttp.send();
}

function PlayMusic(link) {
    play_song.src = link;
    alert(link);
}