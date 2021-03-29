var questions = ['Which art movement is Salvador Dali associated with?', 
'Which is the eighth and furthest-known planet from the sun in the solar system?',
'Vanilla comes from what flowers?',
"What's the highest grossing film of all time?",
"How many teeth does the average adult human have?",
"Which Beatle crossed Abbey Road first?",
"What is Japanese sake made from?",
"What is the collective name for a group of jellyfish?",
"What was the most downloaded app of 2020?",
"What's the fastest animal in the world?"]
var correctAnswers = ['Surrealism', 'Neptune', 'Tropical Orchid', 'Avatar', '32', 'John Lennon', 'Rice', 'A Smack of Jellyfish', 'TikTok', 'Falcon']
var wrongAnswers1 = ['Impressionism', 'Jupiter', 'Vanillious', 'Avengers: Endgame', '28', 'Ringo Star', 'Potato', 'A Gaggle of Jellyfish', 'WhatsApp', 'Cheetah']
var wrongAnswers2 = ['Cubism', 'Mercury', 'Sugar Cane', 'Titanic', '34', 'Paul McCartney', 'Beans', 'A Clutter of Jellyfish', 'Instagram', 'Black Marlin']
var wrongAnswers3 = ['Abstract Art', 'Uranus', 'Butter Lily', 'The Lion King', '30', 'George Harrison', 'Cherry Blossom', 'A Gloop of Jellyfish', 'Zoom', 'Usain Bolt']
var answers = document.querySelector('.answers')
var enterScore = document.querySelector('.enterscore')
var scoreBoard = document.querySelector('.scoreboard')
var score = document.querySelector('#score')
var answerA = document.querySelector('.A')
var answerB = document.querySelector('.B')
var answerC = document.querySelector('.C')
var answerD = document.querySelector('.D')
var secondsOnClock = document.querySelector('.timer')
var questionNumber = document.querySelector('.questionNumber')
var theQuestion = document.querySelector('p')
var start = document.querySelector('.start')
var hide = document.querySelector('#hide')
var h2 = document.querySelector('h2')
var h3 = document.querySelector('h3')
var h4 = document.querySelector("h4") 
var button = document.querySelector('button')
var li = document.querySelector('li')
var ol = document.querySelector('ol')
var playAgain = document.querySelector('.playAgain')
var submit = document.querySelector('.submit')

var index = 0;
var scoreRanking = 0;
var seconds = 60;
var Qnum = 1;

//START BUTTON//
start.textContent = "START";

start.addEventListener("click", function(){
    hide.style.display = "block";
    printText();
    start.style.display = "none";
    timeLeft();
})

function resetVariables(){
    hide.style.display = "block";
    index = 0;
    seconds = 60;
    Qnum = 1;
    h4.style.display = 'none';
    h2.style.display = "block";
    printText();
    timeLeft();
};

//ANSWER SELECTION CORRECT OR INCORRECT//
answers.addEventListener("click", function(event) {
    var element = event.target.innerHTML;
    if (element === correctAnswers[index]){
        nextQuestion();
        h3.style.color = 'green';
        h4.style.display = 'block';
        h4.style.color = 'green';
        h4.innerHTML = "CORRECT";
    }else if (element === wrongAnswers1 || wrongAnswers2 || wrongAnswers3){
        h3.style.color = 'red';
        seconds-=5;
        nextQuestion();
        h4.style.display = 'block';
        h4.innerHTML = "INCORRECT";
        h4.style.color = 'red';
    }
  });

function printText(){
    questionNumber.textContent = "QUESTION " + Qnum;
    theQuestion.textContent = questions[index];
    answerA.textContent = correctAnswers[index];
    answerB.textContent = wrongAnswers1[index];
    answerC.textContent = wrongAnswers2[index];
    answerD.textContent = wrongAnswers3[index];
    for (let i = answers.children.length; i >= 0; i--) {
        answers.appendChild(answers.children[Math.random() * i | 0])        
    }}

//TIMER SET//
function timeLeft(){
    var timerInt = setInterval(function() { 
        h3.style.color = 'rgba(3, 75, 75, .7)';
        seconds--;
        secondsOnClock.textContent = seconds + " seconds left"; 
        if (index >= questions.length){
        clearInterval(timerInt);
        gameOver();
        }
        if(seconds <= 0) {
        clearInterval(timerInt);
        gameOver();
}}, 1000);}

function nextQuestion(){
    index ++;
    Qnum ++;
    printText();
}

function gameOver(){
    h4.style.display = "none";
    answers.style.display = "none";
    questionNumber.style.display = "none";
    hide.style.display = "none";
    enterScore.style.display = "flex";
    scoreBoard.style.display = 'block';
    h2.style.display = "block";
    playAgain.style.display = "flex";
    playAgain.textContent = "Play Again?";
    submit.style.display = "flex";
    submit.textContent = "Submit";

}

playAgain.addEventListener('click', function(){
    h4.style.display = "block";
    answers.style.display = "block";
    questionNumber.style.display = "block";
    hide.style.display = "block";
    enterScore.style.display = "none";
    scoreBoard.style.display = 'none';
    h2.style.display = "none";
    playAgain.style.display = "none";
    submit.style.display = 'none';
    resetVariables();
})

enterScore.addEventListener('keydown', function(event){
    var index2 = 0;
    index2++;
    localStorage.setItem("userScore", score.value);
    console.log(event.key)
    submit.addEventListener('click', function(){
        var index2 = 0;
        index2++;
        ol.children[index2].textContent = score.value + " - " + seconds + " seconds left";
        ol.children[index2].style.textAlign = 'center';
        ol.appendChild(ol.children[index2]);
    })
    if (event.key === 'Enter'){
        playAgain.textContent = "Play Again?"
        ol.children[index2].textContent = score.value + " - " + seconds + " seconds left";
        ol.children[index2].style.textAlign = 'center';;
        ol.appendChild(ol.children[index2])     
    }
})