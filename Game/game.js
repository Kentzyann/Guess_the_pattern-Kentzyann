document.addEventListener("DOMContentLoaded", function() {
  var countdown = document.getElementById('countdown');
  var count = 3;

  var countdownInterval = setInterval(function() {
    countdown.textContent = count;
    count--;

    if (count < 0) {
      clearInterval(countdownInterval);
      countdown.textContent = "START";
      window.location.href = "/Play/play.html"; 
    }
  }, 1000);
});
