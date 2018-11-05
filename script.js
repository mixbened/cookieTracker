// global Score 
var score = 0;

// grab Element to show the score
var scoreDisplay = document.getElementById('score');


// function for increasing the Score
function increaser(){
    // increase variable score by one
    score++;
    // update the scoreDisplay Element
    scoreDisplay.innerHTML = score;
}

// reset function
function reset(){
    // set score equal to 0
    score = 0;
    // update the scoreDisplay Element
    scoreDisplay.innerHTML = score;
}

// event listener on id tracker
var trackerButton = document.getElementById('tracker');
trackerButton.addEventListener('click', increaser)

// event listener on id reset
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);
