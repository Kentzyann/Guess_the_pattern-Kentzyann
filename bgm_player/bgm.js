// bgm.js

// Function para sa pag-play ng background music
function playBGM() {
    var bgm = new Audio('BGM.mp3');
    bgm.loop = true;
    bgm.volume = 1; // Pumili ng tamang volume
    bgm.play();
}

// Tawagin ang function para sa pag-play ng background music
playBGM();
