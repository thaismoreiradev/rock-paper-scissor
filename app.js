const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    genarateComputerChoice()
    getResult();
}))

const genarateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length +1);
    
    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "paper";
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
};


const getResult = () => {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = "It's a draw";
    }    
    else if (computerChoice === "rock"){
        if (userChoice === "paper") {
            resultDisplay.innerHTML = "You Win :)"
        } else {
            resultDisplay.innerHTML = "You lost :("
        }
    }
    else if (computerChoice === "paper"){
        if (userChoice === "rock") {
            resultDisplay.innerHTML = "You lost :("
        } else {
            resultDisplay.innerHTML = "You win :)"
        }
    }
    else if (computerChoice === "scissors"){
        if (userChoice === "rock"){
            resultDisplay.innerHTML = "You win :)"
        } else {
            resultDisplay.innerHTML = "You lost :("
        }
    }
};