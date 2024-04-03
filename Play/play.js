var questions = [
  {question: "Who is this character?", answer: "Naruto"},
  {question: "What anime is this character from?", answer: "One Piece"},
  // Add more questions as needed
];

var currentQuestionIndex = 0;
var score = 0;
var timerDisplay = document.getElementById('timer');
var timeLeft = 60;

function displayQuestion() {
  var questionElement = document.getElementById('question');
  questionElement.textContent = questions[currentQuestionIndex].question;
}

function startTimer() {
  var countdown = setInterval(function() {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      endGame();
    }
    displayTime();
  }, 1000);
}

function displayTime() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;
  timerDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function checkAnswer() {
  var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
  var correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
  var resultElement = document.getElementById('result');
  
  if (userAnswer === correctAnswer) {
    score++;
    timeLeft += 5;
    resultElement.textContent = "Correct! You gained 5 seconds!";
  } else {
    resultElement.textContent = "Incorrect answer.";
  }

  currentQuestionIndex++;
  document.getElementById('answer').value = '';

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  clearInterval(countdown);
  document.getElementById('quiz').innerHTML = "<h2>Game Over!</h2><p>Your score: " + score + "</p>";
}

displayQuestion();
startTimer();
