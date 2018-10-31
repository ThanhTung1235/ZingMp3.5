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
                var music_item = '<div class="container">';
                music_item += '<div class="content" >';
                music_item += '<div>';
                music_item += '<h3 class="stt">'+ (i+1) +'</h3>';
                music_item += '</div>';
                music_item += '<div class="thumbnail" onclick="PlayMusic(\''+obj[i].link +'\')" style="background-image: url('+ obj[i].thumbnail +')"></div>';
                music_item += '<div class="info-song">';
                music_item += '<p class="name-song"> '+obj[i].name +'</p>';
                music_item += '<p class="singer">'+ obj[i].singer+'</p>';
                music_item += '</div>';
                music_item += '<div class="btn_action">';
                music_item += '<i class="fa fa-download" title="Tải về" aria-hidden="true"></i>';
                music_item += '<i class="fa fa-share-alt"title="Chia sẻ"  aria-hidden="true"></i>';
                music_item += '<i class="fa fa-plus" title="Thêm vào" aria-hidden="true"></i>';
                music_item += '</div>';
                music_item += '</div>';
                music_item += '</div>';
                music_content.innerHTML += music_item;
            }

        }

    };
    xmlHttp.open("GET", APIurl, true);
    xmlHttp.send();
}

function PlayMusic(link) {
    play_song.src = link;
}






// '<li onclick="PlayMusic(\''+obj[i].link+'\')">';
// music_item += '<p class="id"> ' + (i+1) + '</p>';
// music_item += '<span>';
// // music_item += '<img height="70px" src="'+ obj[i].thumbnail +'" alt="">';
// music_item += '<div class="thumbnail" style="background: url('+obj[i].thumbnail +')"></div>';
// music_item += '</span>';
// music_item += '<label class="name">'+ obj[i].name + '</label>';
// music_item += '</li>';
// music_content.innerHTML += music_item;