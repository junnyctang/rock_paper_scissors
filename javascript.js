

function getComputerChoice(){
    
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * (3 - 0) + 0)]
}



 
 let playerSelection;
 const computerSelection = getComputerChoice();

    
    function playRound(playerSelection, computerSelection){
        if (playerSelection === "rock" && computerSelection === 'Paper'){
            return "You Lose! Paper beats rock"
        } else if (playerSelection === "rock" && computerSelection === 'Scissors'){
            return ("You Win! Rock beats scissors")
        } else if (playerSelection === "paper" && computerSelection === "Scissors"){
            return "You Lose! Scissors beats paper!"
        } else if (playerSelection === "paper" && computerSelection === "Rock"){
            return "You Win! Paper beats rocks!"
        } else if (playerSelection === "scissors" && computerSelection === "Rock"){
            return "You Lose! Rock beats scissors!"
        } else if (playerSelection === "scissors" && computerSelection === "Paper"){
            return "You Win! Scissors beats paper!"
        } else {
            return "Its a tie!"
        }
    } 
        
  





const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
});

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
});





/* console.log(playGame()); */



