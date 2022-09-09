const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
const rockIcon = '<i class="fa-solid fa-hand-back-fist rockicon" id="rockicon"></i>';
const paperIcon = '<i class="fa-solid fa-hand papericon"></i>';
const scissorsIcon = '<i class="fa-solid fa-hand-scissors scissorsicon"></i>';
const homeGame = document.querySelector("#home");
const playing = document.querySelector("#playing");
const begin = document.querySelector("#begin");
const afterChoose = document.querySelector("#after-choose")
const backButton = document.querySelector("#back");
const startButton = document.querySelector("#start-button")
let userChoice;
let computerChoice;

possibleChoices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoice = e.target.id;

    afterChoose.style.display = 'flex';
    begin.classList.add("hide")

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

startButton.addEventListener("click", () => {
    homeGame.style.display = "none";
    playing.style.display = "flex";
    afterChoose.style.display = 'none';
    backButton.style.display = "flex";
    begin.classList.remove("hide");
})

backButton.addEventListener("click", () => {
     homeGame.style.display = "flex";
    playing.style.display = "none";
    backButton.style.display = "none";
})

const genarateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 +1);
    
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
        resultDisplay.innerHTML = "It's a draw ...";
    }    
    else if (computerChoice === rockIcon){
        if (userChoice === paperIcon) {
            resultDisplay.innerHTML = "You win :)"
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