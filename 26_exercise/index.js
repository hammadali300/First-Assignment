"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Alien color variable
const alienColor = "green";
// Player's score variable
let playerScore;
if (alienColor === "green") {
    playerScore = 5;
    console.log(`You earned ${playerScore} points for shooting the green alien.`);
}
else {
    playerScore = 10;
    console.log(`You earned ${playerScore} points.`);
}
