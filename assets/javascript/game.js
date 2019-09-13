// Colin Reesor
// Crystal Collector
// game.js

//Crystal object array
let crystals = [
    {
        "crystal": "purple",
        "value": 0
    },

    {
        "crystal": "orange",
        "value": 0
    },

    {
        "crystal": "green",
        "value": 0
    },

    {
        "crystal": "blue",
        "value": 0
    }
];

//Set up globals.
let runningTotal = 0;
let targetValue = 0;
let wins = 0;
let losses = 0;

main();

//Run all game functionality.
function main() {

    init();

    $(document).ready(function () {

        runGame();
    });
}

//Processes all game interaction
function runGame() {

    $(".button").click(function (e) {

        let btn = e.target.id;

        switch (btn) {

            case 'crystal-purple':
                runningTotal += crystals[0].value;
                $("#total-score").text(runningTotal);
                break;
            case 'crystal-orange':
                runningTotal += crystals[1].value;
                $("#total-score").text(runningTotal);
                break;
            case 'crystal-green':
                runningTotal += crystals[2].value;
                $("#total-score").text(runningTotal);
                break;
            case 'crystal-blue':
                runningTotal += crystals[3].value;
                $("#total-score").text(runningTotal);
                break;
            default: alert("Something went wrong!");
        }
        checkStatus(runningTotal);
    });
}

//See if the game has ended
function checkStatus(score) {

    if (score === targetValue) {
        gameWin();
    }
    else if (score > targetValue) {
        gameLoss();
    }
}

//You won!!
function gameWin() {

    $("#wins-loss-history").text("You won!!");
    wins++;
    resetGame();
}

//You lost!!
function gameLoss() {

    $("#wins-loss-history").text("You lost!!");
    losses++;
    resetGame();
}

//Reset the game values
function resetGame() {

    runningTotal = 0;
    targetValue = 0;
    $("#total-score").text(targetValue);

    init();
}

//Assigns all random values needed for the game, as well as some user-end display
function init() {

    //Pre-written possible values for each crystal
    let temp = [1, 3, 5, 10];
    //shuffle the indeces
    temp.sort(() => Math.random() - 0.5);

    //Loop through the crystals object and assign values to each crystal
    for (let i = 0; i < crystals.length; i++) {

        crystals[i].value = temp[i];
    }
    //Assign a random target value
    targetValue = randomTargetValue();
    $("#target-value").text(targetValue);

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
}

//Returns a random number
function randomNumber(upperLimit, lowerLimit) {

    return Math.floor((Math.random() * upperLimit) + lowerLimit);
}
//Returns a random index for the crystals object
function randomHiddenValueIndex() {

    return randomNumber(3, 0);
}

//Returns a random target value
function randomTargetValue() {

    return randomNumber(120, 19);
}