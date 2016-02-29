/**

 * Created by WQ on 2014/9/3.

 */

window.data = {};

window.data.userPicData = [];

(function() {

    var layout = document.querySelector("#layout");
    var pages = document.querySelectorAll(".page");
    var Height = layout.offsetHeight;
    var Width = layout.offsetWidth;
    var audio = document.querySelector("audio");
    var musicLogo = document.querySelector(".music-logo");
    var isStart = false;

    window.spHeight = Height;

    function cheshi() {
        if (isStart == false) {
            musicLogo.classList.add("playing");
            audio.src = "video/bg.mp3";
            // audio.play();
        }
        isStart = true;
    }

    Z.onTap(musicLogo, function() {

        musicLogo.classList.contains("playing") ? audio.pause() : audio.play();
        musicLogo.classList.toggle("playing");

    });
    
    setTimeout(function() {
        document.body.removeChild(document.querySelector(".page-loading"));
        document.getElementById("layout").style.display = "block";
        musicLogo.style.display = "block";
        lib.ScreenSystem(document.getElementById("layout"));
        cheshi();
    }, 0);

})();
