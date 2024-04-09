// JavaScript for the timer
let timeLeft = 30; // Initial time in seconds
const timerDisplay = document.getElementById('timer');

function startTimer() {
    setInterval(() => {
        const minutes = Math.floor(timeLeft / 60); // Calculate minutes by dividing by 60
        let seconds = timeLeft % 60; // Calculate seconds by using the remainder
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerDisplay.textContent = `Time: ${minutes}:${seconds}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval();
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
}

startTimer();
