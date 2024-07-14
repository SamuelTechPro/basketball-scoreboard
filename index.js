


let homeScoreBox = document.querySelector(".home-score");
let guestScoreBox = document.querySelector(".guest-score");

let homeScore = 0;
let guestScore = 0;

function addOne() {
    homeScore += 1;
    homeScoreBox.textContent = homeScore;
}

function addTwo() {
    homeScore += 2;
    homeScoreBox.textContent = homeScore;
}

function addThree() {
    homeScore += 3;
    homeScoreBox.textContent = homeScore;
}

function addOneGuest() {
    guestScore += 1;
    guestScoreBox.textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2;
    guestScoreBox.textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3;
    guestScoreBox.textContent = guestScore;
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeScoreBox.textContent = homeScore;
    guestScoreBox.textContent = guestScore;
}