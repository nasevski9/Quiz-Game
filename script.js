document.addEventListener('DOMContentLoaded', function () {

const quizDiv = document.getElementById("quiz");
const startButton = document.getElementById("start");
const time = document.getElementById("time");
const answer = document.getElementById("answer");
const viewHighscores = document.getElementById("highscores");


const defaultHTML = quizDiv.innerHTML;

function showDefault() {
    quizDiv.innerHTML = defaultHTML;
    startButton.addEventListener("click", function () {
        timeInterval = setInterval(function () {
          time.textContent = "Time Left: " + timeLeft + " seconds !";
          if (timeLeft === 0) {
            clearInterval(timeInterval);
            endGame();
          }
          timeLeft--;
        }, 1000);
      
        startQuiz();
      });
}

var timeLeft = 60;

let timeInterval;

startButton.addEventListener("click", function () {
  timeInterval = setInterval(function () {
    time.textContent = "Time Left: " + timeLeft + " seconds !";
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      endGame();
    }
    timeLeft--;
  }, 1000);

  startQuiz();
});


function startQuiz() {

    quizDiv.innerHTML = '';

    const questionHeader = document.createElement("h1");
    questionHeader.textContent = "1.Commonly used data-types DO NOT INCLUDE:"
    quizDiv.appendChild(questionHeader);
    
    const answerButton1 = document.createElement("button");
    const answerButton2 = document.createElement("button");
    const answerButton3 = document.createElement("button");
    const answerButton4 = document.createElement("button");

    answerButton1.textContent = "1.strings";
    answerButton2.textContent = "2.booleans";
    answerButton3.textContent = "3.alerts";
    answerButton4.textContent = "4.numbers";

    answerButton1.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton2.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton3.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton4.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");

    answerButton1.setAttribute("id", "answerButton1");
    answerButton2.setAttribute("id", "answerButton2");
    answerButton3.setAttribute("id", "answerButton3");
    answerButton4.setAttribute("id", "answerButton4");

    answerButton1.addEventListener("click", handleButtonClick);            
    answerButton2.addEventListener("click", handleButtonClick);    
    answerButton3.addEventListener("click", handleButtonClick);    
    answerButton4.addEventListener("click", handleButtonClick);    

    quizDiv.appendChild(answerButton1);
    quizDiv.appendChild(answerButton2);
    quizDiv.appendChild(answerButton3);
    quizDiv.appendChild(answerButton4);

    function handleButtonClick(event) {
    
    if (event.target.id === 'answerButton1') {
        wrongAnswer();
        nextQuestion2();
    } else if (event.target.id === 'answerButton2') {
        wrongAnswer();
        nextQuestion2();
    } else if (event.target.id === 'answerButton3') {
        correctAnswer();
        nextQuestion2();
    } else if (event.target.id === 'answerButton4') {
        wrongAnswer();
        nextQuestion2();
    }
  }
}

function correctAnswer() {
    answer.textContent = "Correct Answer";
    setTimeout(function () {
        answer.textContent = "";
      }, 2000);

}
function wrongAnswer() {
    answer.textContent = "Wrong Answer";
    setTimeout(function () {
        answer.textContent = "";
      }, 2000);
    timeLeft -= 10;
    if (timeLeft <= 0) {
        clearInterval(timeInterval);
        endGame(); 
    }
}

function nextQuestion2() {
    quizDiv.innerHTML = '';

    const questionHeader = document.createElement("h1");
    questionHeader.textContent = "2.The Condition in an If / Else statement is enclosed within _____."
    quizDiv.appendChild(questionHeader);
    
    const answerButton1 = document.createElement("button");
    const answerButton2 = document.createElement("button");
    const answerButton3 = document.createElement("button");
    const answerButton4 = document.createElement("button");

    answerButton1.textContent = "1.quotes";
    answerButton2.textContent = "2.curly brackets";
    answerButton3.textContent = "3.parentheses";
    answerButton4.textContent = "4.square brackets";

    answerButton1.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton2.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton3.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton4.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");

    answerButton1.setAttribute("id", "answerButton1");
    answerButton2.setAttribute("id", "answerButton2");
    answerButton3.setAttribute("id", "answerButton3");
    answerButton4.setAttribute("id", "answerButton4");

    answerButton1.addEventListener("click", handleButtonClick);            
    answerButton2.addEventListener("click", handleButtonClick);    
    answerButton3.addEventListener("click", handleButtonClick);    
    answerButton4.addEventListener("click", handleButtonClick);    

    quizDiv.appendChild(answerButton1);
    quizDiv.appendChild(answerButton2);
    quizDiv.appendChild(answerButton3);
    quizDiv.appendChild(answerButton4);

    function handleButtonClick(event) {

        if (event.target.id === 'answerButton1') {
            wrongAnswer();
            nextQuestion3();
        } else if (event.target.id === 'answerButton2') {
            wrongAnswer();
            nextQuestion3();
        } else if (event.target.id === 'answerButton3') {
            correctAnswer();
            nextQuestion3();
        } else if (event.target.id === 'answerButton4') {
            wrongAnswer();
            nextQuestion3();
        }
      }
}
function nextQuestion3() {
    quizDiv.innerHTML = '';

    const questionHeader = document.createElement("h1");
    questionHeader.textContent = "3.Arrays in Javascript can be used to store _____."
    quizDiv.appendChild(questionHeader);
    
    const answerButton1 = document.createElement("button");
    const answerButton2 = document.createElement("button");
    const answerButton3 = document.createElement("button");
    const answerButton4 = document.createElement("button");

    answerButton1.textContent = "1.numbers and strings";
    answerButton2.textContent = "2.other arrays";
    answerButton3.textContent = "3.booleans";
    answerButton4.textContent = "4.all of the above";

    answerButton1.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton2.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton3.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton4.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");

    answerButton1.setAttribute("id", "answerButton1");
    answerButton2.setAttribute("id", "answerButton2");
    answerButton3.setAttribute("id", "answerButton3");
    answerButton4.setAttribute("id", "answerButton4");

    answerButton1.addEventListener("click", handleButtonClick);            
    answerButton2.addEventListener("click", handleButtonClick);    
    answerButton3.addEventListener("click", handleButtonClick);    
    answerButton4.addEventListener("click", handleButtonClick);    

    quizDiv.appendChild(answerButton1);
    quizDiv.appendChild(answerButton2);
    quizDiv.appendChild(answerButton3);
    quizDiv.appendChild(answerButton4);

    function handleButtonClick(event) {
        
        if (event.target.id === 'answerButton1') {
            wrongAnswer();
            nextQuestion4();
        } else if (event.target.id === 'answerButton2') {
            wrongAnswer();
            nextQuestion4();
        } else if (event.target.id === 'answerButton3') {
            wrongAnswer();
            nextQuestion4();
        } else if (event.target.id === 'answerButton4') {
            correctAnswer();
            nextQuestion4();
        }
      }
}
function nextQuestion4() {
    quizDiv.innerHTML = '';

    const questionHeader = document.createElement("h1");
    questionHeader.textContent = "4.String values muust be enclosed within _____ when being assigned to variables"
    quizDiv.appendChild(questionHeader);
    
    const answerButton1 = document.createElement("button");
    const answerButton2 = document.createElement("button");
    const answerButton3 = document.createElement("button");
    const answerButton4 = document.createElement("button");

    answerButton1.textContent = "1.commas";
    answerButton2.textContent = "2.curly brackets";
    answerButton3.textContent = "3.parentheses";
    answerButton4.textContent = "4.quotes";

    answerButton1.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton2.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton3.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton4.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");

    answerButton1.setAttribute("id", "answerButton1");
    answerButton2.setAttribute("id", "answerButton2");
    answerButton3.setAttribute("id", "answerButton3");
    answerButton4.setAttribute("id", "answerButton4");

    answerButton1.addEventListener("click", handleButtonClick);            
    answerButton2.addEventListener("click", handleButtonClick);    
    answerButton3.addEventListener("click", handleButtonClick);    
    answerButton4.addEventListener("click", handleButtonClick);    

    quizDiv.appendChild(answerButton1);
    quizDiv.appendChild(answerButton2);
    quizDiv.appendChild(answerButton3);
    quizDiv.appendChild(answerButton4);

    function handleButtonClick(event) {
    
        if (event.target.id === 'answerButton1') {
            wrongAnswer();
            nextQuestion5();
        } else if (event.target.id === 'answerButton2') {
            wrongAnswer();
            nextQuestion5();
        } else if (event.target.id === 'answerButton3') {
            wrongAnswer();
            nextQuestion5();
        } else if (event.target.id === 'answerButton4') {
            correctAnswer();
            nextQuestion5();
        }
      }
}

function nextQuestion5() {
    quizDiv.innerHTML = '';

    const questionHeader = document.createElement("h1");
    questionHeader.textContent = "5.A very useful tool used during development and debugging for printing content to the debugger is:"
    quizDiv.appendChild(questionHeader);
    
    const answerButton1 = document.createElement("button");
    const answerButton2 = document.createElement("button");
    const answerButton3 = document.createElement("button");
    const answerButton4 = document.createElement("button");

    answerButton1.textContent = "1.console log";
    answerButton2.textContent = "2.for loops";
    answerButton3.textContent = "3.JavaScript";
    answerButton4.textContent = "4.terminal / bash";

    answerButton1.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton2.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton3.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");
    answerButton4.setAttribute("style", "color: white; border: none; background-color: indigo; border-radius 20px 20px 20px 20px; display: flex; justify-content: center; align-items: center; margin: 5px;");

    answerButton1.setAttribute("id", "answerButton1");
    answerButton2.setAttribute("id", "answerButton2");
    answerButton3.setAttribute("id", "answerButton3");
    answerButton4.setAttribute("id", "answerButton4");

    answerButton1.addEventListener("click", handleButtonClick);            
    answerButton2.addEventListener("click", handleButtonClick);    
    answerButton3.addEventListener("click", handleButtonClick);    
    answerButton4.addEventListener("click", handleButtonClick);    

    quizDiv.appendChild(answerButton1);
    quizDiv.appendChild(answerButton2);
    quizDiv.appendChild(answerButton3);
    quizDiv.appendChild(answerButton4);

    function handleButtonClick(event) {

        if (event.target.id === 'answerButton1') {
            correctAnswer();
            endGame();
        } else if (event.target.id === 'answerButton2') {
            wrongAnswer();
            endGame();
        } else if (event.target.id === 'answerButton3') {
            wrongAnswer();
            endGame();
        } else if (event.target.id === 'answerButton4') {
            wrongAnswer();
            endGame();
        }
      }
}

function endGame() {
    clearInterval(timeInterval);
    time.textContent = "Time Left: " + timeLeft + " seconds !";

    quizDiv.innerHTML = '';

    const div = document.createElement("div");
    quizDiv.appendChild(div);
    
    div.setAttribute("style", "border-style: indigo; border-radius: 20px; border-color: indigo; background-color: indigo; padding: 30px;");

    const endHeader = document.createElement("h1");
    endHeader.textContent = "All Done";
    div.appendChild(endHeader);
    endHeader.setAttribute("style", "text-transform: uppercase; color: white;")

    const finalScore = document.createElement("h2");
    finalScore.textContent = "Your final score is: " + timeLeft + " !";
    finalScore.setAttribute("style", "color:white; text-align: center; font-size 20px;")
    div.appendChild(finalScore);

    const form = document.createElement('form');

    const label = document.createElement('label');
    label.textContent = 'Enter your Initials: ';
    label.setAttribute("style", "color: white; font-size: 20px;")

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("style", "font-size: 15px; border: none; color: indigo; background-color: white; margin-left: 5px;");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "submit");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const userInitials = input.value;
        const score = timeLeft;
    
        // Get the existing highscores from local storage or create an empty array if it's the first score
        let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

        // Add the current score as a new object to the highscores array
        highscores.push({ user: userInitials, score: score });

        // Store the updated highscores array in the local storage
        localStorage.setItem("highscores", JSON.stringify(highscores));
        displayHighscores();
    });

    const input = document.createElement('input');
    input.setAttribute('type', 'text');

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submitBtn);

    div.appendChild(form);
}

viewHighscores.addEventListener("click", displayHighscores);

function displayHighscores() {

    quizDiv.innerHTML = '';

    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];


    const div = document.createElement("div");
    quizDiv.appendChild(div);
    
    div.setAttribute("style", "border-style: solid; border-color: indigo; padding: 30px; border-radius: 20px; background-color: indigo;");

    const user = JSON.parse(localStorage.getItem("highscores"));
    const score = timeLeft;
  
    const highscore = document.createElement("h1");
    highscore.textContent = "Highscores";
    div.appendChild(highscore);
    highscore.setAttribute("style", "color: white; text-transform: uppercase;")
  
    const ol = document.createElement("ol");
    ol.setAttribute("style", "color: white; font-size: 15px; font-weight: bold;");

    highscores.sort((a, b) => b.score - a.score);

    for (let i = 0; i < highscores.length; i++){

        const entry = highscores[i];

        const li = document.createElement("li");
        li.textContent = entry.user + " - " + entry.score;
        li.setAttribute("style", "color: white; font-size: 20px; font-weight: bold;");
        ol.appendChild(li);
    }

    div.appendChild(ol);

    const buttonDiv = document.createElement("div");
    div.appendChild(buttonDiv);
    buttonDiv.setAttribute("style", "display: flex; justify-content: space-between; align-items: center; background-color: indigo;");


    const backButton = document.createElement("button");
    buttonDiv.appendChild(backButton);
    backButton.setAttribute("style", "color: indigo; border: none; background-color: white; border-radius: 20px; display: flex; justify-content: space-between; align-items: center; margin: 5px;");
    backButton.addEventListener("click", function() {
      showDefault();
      location.reload();
    });
    backButton.textContent = "Go Back";
  
    const clearButton = document.createElement("button");
    clearButton.setAttribute("style", "color: indigo; border: none; background-color: white; border-radius: 20px; display: flex; justify-content: space-between; align-items: center; margin: 5px;");
    buttonDiv.appendChild(clearButton);
    clearButton.addEventListener("click", function() {
      localStorage.clear();
      displayHighscores();
      ol.remove();
      li.remove();
    });
    clearButton.textContent = "Clear Highscores";
}

//sort highscores

});