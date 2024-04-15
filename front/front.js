
function playSettingsSound() {
    var sound = document.getElementById('settingsSound');
    sound.play();
    sound.onended = function() {
        window.location.href = "/settings.html";
    };
}


function playSoundAndRedirect() {
    var sound = document.getElementById('sound');
    sound.play();
    setTimeout(function() {
        window.location.href = "/Game/game.html";
    }, sound.duration * 500); 
}


function showSettingsPopup() {
  var popup = document.getElementById("settingsPopup");
  var settingsSound = document.getElementById("settingsSound");
  settingsSound.play(); 
  popup.style.display = "block"; 
}

function hideSettingsPopup() {
  var popup = document.getElementById("settingsPopup");
  popup.style.display = "none"; 
}
