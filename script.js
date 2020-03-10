// So I need a start button that hjas a click event and when the button is clicked it sstarts the quiz
// As well as the timer and then first question appears and the button dissapears
// I'll need somewhere to store my questions and answers
// Need an event hadnler for the choices that determines if they're right or wrong and then changes to the nexg question
// If the answer is wrong I'll need a way to decrement the timer by 10 seconds
// Questons should be an array of objects, each object will have several values a questoin ("string") choices will be an array of choices
// Final string that has the answer

var questions = [
    { question: 'whats your fav colors?', choiceA: 'blue', choiceB: 'orange', choiceC: 'red', choiceD: 'purple', answer: 'orange' },
    { question: 'whats your fav colors?', choiceA: 'blue', choiceB: 'orange', choiceC: 'red', answer: 'orange' }
]
var startEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choiceAEl = document.getElementById("choice-A");
var choiceBEl = document.getElementById("choice-B");
var choiceCEl = document.getElementById("choice-C");
var choiceDEl = document.getElementById("choice-D");




choiceAEl.addEventListener("click", choice); 
choiceBEl
choiceCEl
choiceDEl

startEl.addEventListener("click", function () {
    console.log("Hello!");
    // Timer will begin after start button is clicked
    // First question appears and the start button dissapears
    // Here we call the timer function to begin after the click event 
    timer()
    showQuestion()

});



function choice () {
    console.log("Hello!");
    
    

}

// Execute timer
// This is the definition
function timer() {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
        // Time w/a computer is based on milliseconds
    }, 1000);
}

function showQuestion() {
    questionEl.textContent = questions[0].question
    choiceAEl.textContent = questions[0].choiceA
    choiceBEl.textContent = questions[0].choiceB
    choiceCEl.textContent = questions[0].choiceC
    choiceDEl.textContent = questions[0].choiceD

}


