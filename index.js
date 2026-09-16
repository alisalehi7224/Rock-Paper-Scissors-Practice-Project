

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resultDisplay = document.getElementById("resultDisplay");
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const choices = [`rock`, `paper`, `scissors`];
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const drawDisplay = document.getElementById("drawDisplay");
const resetButton = document.getElementById("resetButton");
const matchHistory = document.getElementById("matchHistory");




matchHistory.textContent = "Match History: ⬇️\n\n"
let playerScore = 0;
let computerScore = 0;
let draws = 0;
let roundNumber = 0;
resetButton.addEventListener("click", event => location.reload());


function playGame(playerChoice){
    let computerChoice = choices[(Math.floor(Math.random() * 3))];
    let result = "";
    resultDisplay.classList.remove("tie", "win", "lose");
    if(computerChoice === playerChoice){
        result += "IT'S A TIE!";
    }

    else{
        switch(playerChoice){
            case `rock`:
                result += (computerChoice === `scissors`) ? "YOU WIN!" : "YOU LOSE!";
                (computerChoice === `scissors`) ? resultDisplay.classList.add("win") : resultDisplay.classList.add("lose");
                break;
            case `paper`:
                result += (computerChoice === `rock`) ? "YOU WIN!" : "YOU LOSE!";
                (computerChoice === `rock`) ? resultDisplay.classList.add("win") : resultDisplay.classList.add("lose");
                break;
            case `scissors`:
                result += (computerChoice === `paper`) ? "YOU WIN!" : "YOU LOSE!";
                (computerChoice === `paper`) ? resultDisplay.classList.add("win") : resultDisplay.classList.add("lose");
                break;
        }
    }
    if(result === "YOU WIN!"){
        playerScore++;
    }
    else if(result === "YOU LOSE!"){
        computerScore++;
    }
    else{
        draws++;
    }


    resultDisplay.textContent = result;
    playerChoiceDisplay.textContent = `🧑‍🦰 Player: ${playerChoice}`;
    computerChoiceDisplay.textContent = `💻 Computer: ${computerChoice}`;

    playerScoreDisplay.textContent = `• Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `• Computer Score: ${computerScore}`;
    drawDisplay.textContent = `• Draws: ${draws}`;


    //Match history
    if(result === "YOU WIN!"){
        roundNumber++;
        const matchHistoryText = document.createElement("p");
        matchHistoryText.textContent = `Round ${roundNumber}: `;

        const matchHistoryWin = document.createElement("span");
        matchHistoryWin.classList.add("matchHistoryWin");
        matchHistoryWin.textContent = "win"
        matchHistoryText.appendChild(matchHistoryWin);
        matchHistory.appendChild(matchHistoryText);

    }
    else if(result === "YOU LOSE!"){
        roundNumber++;
        const matchHistoryText = document.createElement("p");
        matchHistoryText.textContent = `Round ${roundNumber}: `;

        const matchHistoryLoss = document.createElement("span");
        matchHistoryLoss.classList.add("matchHistoryLoss");
        matchHistoryLoss.textContent = "loss"
        matchHistoryText.appendChild(matchHistoryLoss);
        matchHistory.appendChild(matchHistoryText);

    }
    else{
        roundNumber++;
        const matchHistoryText = document.createElement("p");
        matchHistoryText.textContent = `Round ${roundNumber}: `;

        const matchHistoryTie = document.createElement("span");
        matchHistoryTie.classList.add("matchHistoryTie");
        matchHistoryTie.textContent = "tie"
        matchHistoryText.appendChild(matchHistoryTie);
        matchHistory.appendChild(matchHistoryText);
    }








    //Ending the game
    if(playerScore == 5 || computerScore == 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;}
    if(playerScore == 5){
        resultDisplay.textContent = "<<YOU WON THE GAME>>";
    }
    if(computerScore == 5){
        resultDisplay.textContent = "<<YOU LOST THE GAME>>";
    }

    

}

