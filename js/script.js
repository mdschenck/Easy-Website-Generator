// ROCK PAPER SCISSORS CODE: 

// window.alert("Welcome to the game")
// let wins = 0;
// let losses = 0;
// let ties = 0;
// let replay = true;


// while (replay == true) {
// let userChoice = prompt("Welcome to Rock, Paper, Scissors! \n Which do you choose?");

// let computerChoice  = ["Rock", "Paper", "Scissors"];

// function getRandomInt(max) {
//     return Math.floor(Math.random(3) * max);
//   }

// let output = getRandomInt(3);

// let opponent = computerChoice[output];

// console.log(userChoice);
// console.log(opponent);

// if (userChoice == opponent) {
//     ties++;
//     window.alert("The computer chose " + opponent + " - It's a tie!")
// } else if 
// ((userChoice == "rock" && opponent == "Scissors") ||
// (userChoice == "paper" && opponent == "Rock") ||
// (userChoice == "scissors" && opponent == "Paper"))  {
//     wins++;
//     window.alert("The computer chose " + opponent + " - You win!")
// } else {
//     losses++;
//     window.alert("The computer chose " + opponent + " - You Lose!")
// }

// var displayScore = function() {
// window.alert("Wins: " + wins + "\n Losses: " + losses + "\n Ties: " + ties )
// }

// displayScore();

// let replay = confirm("Do you want to play again?");

// } 

let userText1 = prompt("What do you want your website to say??");

var headerEl = document.createElement("h1");
headerEl.textContent = userText1;
document.body.appendChild(headerEl);

let textSize1 = prompt("What size do you want this line? (in pixels)");
headerEl.setAttribute("style", `font-size: ${textSize1}px`);

let textColor1 = prompt("What color do you want this line to be?");
headerEl.setAttribute("style", `color: ${textColor1}`);


let userText2 = prompt("What is your next line??");

var h2El = document.createElement("h2");
h2El.textContent = userText2;
document.body.appendChild(h2El);

let textSize2 = prompt("What size do you want this line? (in pixels)");
h2El.setAttribute("style", `font-size: ${textSize2}px`);

let textColor2 = prompt("What color do you want this line to be?");
h2El.setAttribute("style", `color: ${textColor2}`);


if (textColor2 == "green") {
    window.alert("Yay! I love green.");
} else if (textColor2 == "red") {
    window.alert("Red is a nice color")
} else if (textColor2 == "blue") {
    window.alert("Blue skidoo you can too")
}else if (textColor2 == "purple") {
    window.alert("I love you, you love me, purple is the color of Bar-ar-ney")
}else if (textColor2 == "orange") {
    window.alert("Oranges are delicious, but an ugly color.")
}else if (textColor2 == "pink") {
    window.alert("OOh, Pink is Niiiice!")
} else {
    window.alert("Umm, I'm not so sure about that color choice, i guess we'll see what it looks like...")
}

let bgColor = prompt("What color do you want the background??");
document.body.setAttribute("style", `background-color: ${bgColor}`);

if (userText1 == "i love you") {
    window.alert("I love you too!")
}