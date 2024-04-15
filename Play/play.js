let timeLeft = 30; 
const timerDisplay = document.getElementById('timer');

function startTimer() {
    const intervalId = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60; 
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerDisplay.textContent = `Time: ${minutes}:${seconds}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(intervalId); 
            timerDisplay.textContent = "Time's up!";
            displayGameOverPopup();
        }
    }, 1000);
}

startTimer();

const images=[
    "/A_Img/1.bugs_bunny.jpeg",
    "/A_Img/2.diego.jpeg",
    "/A_Img/3.dipper_pines.jpeg",
    "/A_Img/4.dora.jpeg",
    "/A_Img/5.goku.jpeg",
    "/A_Img/6.inuyasha.jpeg",
    "/A_Img/7.jake.jpeg",
    "/A_Img/8.jerry.jpeg",
    "/A_Img/9.levi.jpeg",
    "/A_Img/A.phineas.jpeg",
    "/A_Img/B.pikachu.jpeg",
    "/A_Img/C.platypus.jpeg",
    "/A_Img/D.saitama.jpeg",
    "/A_Img/E.spongebob.jpeg",
    "/A_Img/F.tom.jpeg"
  ]; 

let remainingIndexes = Array.from({ length: images.length }, (_, index) => index); 

function setupGame() {
  if (remainingIndexes.length === 0) {
    remainingIndexes = Array.from({ length: images.length }, (_, index) => index);
  }

  const randomIndex = Math.floor(Math.random() * remainingIndexes.length);
  currentImageIndex = remainingIndexes[randomIndex];
  remainingIndexes.splice(randomIndex, 1);
  document.getElementById('image').src = images[currentImageIndex];
}


function checkGuess() {
  const guessInput = document.getElementById('guess').value.trim().toLowerCase();
  const correctAnswer = getCorrectAnswer();

  if (guessInput === correctAnswer) {
    document.getElementById('message').textContent = "Congratulations! You guessed it right!";
    message.style.fontFamily = 'Times New Roman';
    message.style.color = 'greenyellow';
    timerDisplay.classList.add('add-time-animation');
    setTimeout(() => {
      timerDisplay.classList.remove('add-time-animation');
    }, 1000);

    timeLeft += 5;
    const scoreDisplay = document.getElementById('score');
    let score = parseInt(scoreDisplay.textContent);
    score++;
    scoreDisplay.textContent = score;
    setupGame(); 
    const correctSound = new Audio('/bgm_sound/Time_score.mp3');
    correctSound.play();
    setTimeout(() => {
      document.getElementById('message').textContent = "";
    }, 2000);
  } else {
    document.getElementById('message').textContent = "Oops! Try again.";
    message.style.color = 'red';
    message.style.fontFamily = 'Times New Roman';
    const wrongSound = new Audio('/bgm_sound/wrong.mp3');
    wrongSound.play();
    setTimeout(() => {
      document.getElementById('message').textContent = "";
    }, 2000);
  }

  document.getElementById('guess').value = "";
}



function displayGameOverPopup() {
    const popup = document.getElementById('gameOverPopup');
    const overlay = document.getElementById('overlay');
    const totalScoreDisplay = document.getElementById('totalScore');
    const scoreDisplay = document.getElementById('score');
    const totalScore = scoreDisplay.textContent;
    totalScoreDisplay.textContent = totalScore;
    popup.style.display = 'block';
    overlay.style.display = 'block';

    const gameOverSound = new Audio('/bgm_sound/Game_over.mp3');
    gameOverSound.play();
}

function goToGameOver() {
    const homeSound = new Audio('/bgm_sound/Home.mp3');
    homeSound.play();

    const popup = document.getElementById('gameOverPopup');
    const overlay = document.getElementById('overlay');
    const totalScoreDisplay = document.getElementById('totalScore');
    const scoreDisplay = document.getElementById('score');
    const totalScore = scoreDisplay.textContent;
    totalScoreDisplay.textContent = totalScore;
    popup.style.display = 'block';
    overlay.style.display = 'block';
    
    const gameOverSound = new Audio('/bgm_sound/Game_over.mp3');
    gameOverSound.play();
}


function goHome() {
    const homeSound = new Audio('/bgm_sound/Home.mp3');
    homeSound.play();
    homeSound.onended = () => {
        window.location.href = "/front/front.html"; 
    };
}


function retryGame() {
    document.getElementById('guess').value = "";
    document.getElementById('message').textContent = "";
    timeLeft = 30; 
    document.getElementById('score').textContent = "00";
    setupGame();
    startTimer(); 
    const retrySound = new Audio('/bgm_sound/Retry.mp3');
    retrySound.play();
    retrySound.onended = () => {
    window.location.reload();
  };
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
    case 11:
      correctAnswer = "platypus";
      break;
    case 12:
      correctAnswer = "saitama";
      break;
    case 13:
      correctAnswer = "spongebob";
      break;
    case 14:
      correctAnswer = "tom";
      break;
    
  }
  return correctAnswer;
}
window.onload = setupGame;

