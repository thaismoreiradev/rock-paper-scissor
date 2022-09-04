const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
const rockIcon = '<i class="fa-solid fa-hand-back-fist rockicon" id="rockicon"></i>';
const paperIcon = '<i class="fa-solid fa-hand papericon"></i>';
const scissorsIcon = '<i class="fa-solid fa-hand-scissors scissorsicon"></i>';
let userChoice;
let computerChoice;

possibleChoices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoice = e.target.id;

     if (e.target.id === "rock") {
        userChoice = rockIcon;
     }
     else if (e.target.id === "paper") {
        userChoice = paperIcon;
     }
     else {
        userChoice = scissorsIcon;
     }

     userChoiceDisplay.innerHTML = userChoice;
    
    genarateComputerChoice()
    getResult();
}))

const genarateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length +1);
    
    if (randomNumber === 1) {
        computerChoice = rockIcon;
    }
    if (randomNumber === 2) {
        computerChoice = paperIcon;
    }
    if (randomNumber === 3) {
        computerChoice = scissorsIcon;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
 };

const getResult = () => {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = "It's a draw";
    }    
    else if (computerChoice === rockIcon){
        if (userChoice === paperIcon) {
            resultDisplay.innerHTML = "You Win :)"
        } else {
            resultDisplay.innerHTML = "You lost :("
        }
    }
    else if (computerChoice === paperIcon){
        if (userChoice === rockIcon) {
            resultDisplay.innerHTML = "You lost :("
        } else {
            resultDisplay.innerHTML = "You win :)"
        }
    }
    else if (computerChoice === scissorsIcon){
        if (userChoice === rockIcon){
            resultDisplay.innerHTML = "You win :)"
        } else {
            resultDisplay.innerHTML = "You lost :("
        }
    }
};