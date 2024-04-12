// JavaScript for the timer
let timeLeft = 30; // Initial time in seconds
const timerDisplay = document.getElementById('timer');

function startTimer() {
    setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60; 
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


const images = ["/A_Guess/bugs_bunny.jpeg","/A_Guess/diego.jpeg","/A_Guess/dipper_pines.jpeg","/A_Guess/dora.jpeg","/A_Guess/goku.jpeg","/A_Guess/inuyasha.jpeg","/A_Guess/jake.jpeg","/A_Guess/jerry.jpeg","/A_Guess/levi.jpeg","/A_Guess/phineas.jpeg","/A_Guess/pikachu.jpeg"]; 

let currentImageIndex;

function setupGame() {
  currentImageIndex = Math.floor(Math.random() * images.length);
  document.getElementById('image').src = images[currentImageIndex];
}

function checkGuess() {
  const guessInput = document.getElementById('guess').value.trim().toLowerCase();
    getCorrectAnswer().toLowerCase()
  const correctAnswer = getCorrectAnswer();

  if (guessInput === correctAnswer) {
    document.getElementById('message').textContent = "Congratulations! You guessed it right!";
    setupGame(); 
  } else {
    document.getElementById('message').textContent = "Oops! Try again.";
  }
}


function getCorrectAnswer() {
  let correctAnswer;
  switch (currentImageIndex) {
    case 0:
      correctAnswer = "bugs bunny";
      break;
    case 1:
      correctAnswer = "diego";
      break;
    case 2:
      correctAnswer = "dipper";
      break;
    case 3:
      correctAnswer = "dora";
      break;
    case 4:
      correctAnswer = "goku";
      break;
    case 5:
      correctAnswer = "inuyasha";
      break;
    case 6:
      correctAnswer = "jake";
      break;
    case 7:
      correctAnswer = "jerry";
      break;
    case 8:
      correctAnswer = "levi";
      break;
    case 9:
      correctAnswer = "phineas";
      break;
    case 10:
      correctAnswer = "pikachu";
      break;  
    
  }
  return correctAnswer;
}

window.onload = setupGame;
