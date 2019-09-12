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
let valueGuessed = 0;
let targetValue = 0;
let wins = 0;
let losses = 0;
let gameOver = false;

main();

//Run all game functionality.
function main() {

    $(document).ready(function () {

        updateRunningTotal();

        if (runningTotal === targetValue) {
            gameWin();
        }
        else if (runningTotal > targetValue) {
            gameLoss();
        }
    });
}

function updateRunningTotal() {

$(".button").on('click', function() {
    
    let btn = $(this.attr("id"));
    runningTotal += ;
})
}

function gameWin() {


}

function gameLoss() {


}

function assignRandVals() {

    crystals.forEach(element => {
        crystals.value = randomHiddenValue();
    });
}

//Returns a random hidden value for a crystal
function randomHiddenValue() {

    return Array.from({length: 4}, () => Math.floor(Math.random() * 12) + 1);
}

//Returns a random target value
function randomTargetValue() {

    return Math.floor((Math.random() * 120) + 19);
}