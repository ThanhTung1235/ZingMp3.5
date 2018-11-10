function check_loged() {
    var current_loged = document.getElementById("login");
    var nav = document.getElementsByClassName("nav-items")[0];
    if (localStorage.getItem('token') != null) {
        current_loged.style.display = 'inline-block';
    }
    else {
        current_loged.style.display = 'none';
        nav.innerHTML = '<label><a href="#">của tui</a></label>\n' +
            '                <label><a href="GetSongs.html">Online</a></label>\n' +
            '                <label><a href="#">thêm mới bài hát</a></label>';

    }
}
