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
var wrongAnswers2 = ['Cubism', 'Mercury', 'Sugar Cane', 'Titalic', '34', 'Paul McCartney', 'Beans', 'A Clutter of Jellyfish', 'Instagram', 'Black Marlin']
var wrongAnswers3 = ['Abstract Art', 'Uranus', 'Butter Lily', 'Star Wars: The Force Awakens', '30', 'George Harrison', 'Cherry Blossom', 'A Gloop of Jellyfish', 'Zoom', 'Usain Bolt']
var ul = document.querySelector('ul')
var card = document.querySelector('.card')
var answerA = document.querySelector('.A')
var answerB = document.querySelector('.B')
var answerC = document.querySelector('.C')
var answerD = document.querySelector('.D')
var secondsOnClock = document.querySelector('.timer')
var questionNumber = document.querySelector('.questionNumber')
var theQuestion = document.querySelector('p')
var start = document.querySelector('.start')
var hide = document.querySelector('#hide')
var index = 0;
var seconds = 100;
var Qnum = 1;
var timerInt = 0;

//START BUTTON//
start.textContent = "START";

start.addEventListener("click", function(){
    hide.style.display = "block";
    printText();
    start.style.display = "none";
})



//ANSWER SELECTION CORRECT OR INCORRECT//
ul.addEventListener("click", function(event) {
    var element = event.target.innerHTML;
    if (element === correctAnswers[index]){
        nextQuestion();
    }else {
        seconds--;
        nextQuestion();
    }
    console.log(element)
  });




  function printText(){
    questionNumber.textContent = "QUESTION " + Qnum;
    theQuestion.textContent = questions[index];
    answerA.textContent = correctAnswers[index];
    answerB.textContent = wrongAnswers1[index];
    answerC.textContent = wrongAnswers2[index];
    answerD.textContent = wrongAnswers3[index];

    for (let i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0])        
    }

//TIMER SET//
var timerInt = setInterval(function() {
    seconds--;
    secondsOnClock.textContent = seconds + " seconds left";   
    if(seconds <= 0) {
    clearInterval(timerInt);
    gameOver();
}}, 1000);}

function nextQuestion(){
    index ++;
    Qnum ++;
    clearInterval(timerInt);
    printText();

 
}

function gameOver(){

}

function Points(){

}