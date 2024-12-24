

function getComputerChoice(){
    
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * (3 - 0) + 0)]
}

function playGame(){

 let playerScore = 0 ;
 let computerScore = 0 ;
 let tie = 0 ; 

 for (i = 1; i <= 5; i++){ 
   
    const playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
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
        
        if ((playerSelection === "rock" && computerSelection === 'Scissors') || (playerSelection === "paper" && computerSelection === "Rock") || (playerSelection === "scissors" && computerSelection === "Paper")){
            playerScore += 1 
        } else if ((playerSelection === "rock" && computerSelection === 'Paper') ||(playerSelection === "paper" && computerSelection === "Scissors") || (playerSelection === "scissors" && computerSelection === "Rock")){
            computerScore += 1 
        } else {
            tie += 1
        };
       
 };

 if (playerScore > computerScore) {
    return "Congratulations. You Win!"
 } else if (playerScore === computerScore) {
    return "Y'all tied."
 } else {
    return "You are Ass. Computer Wins!"
 }

};

 console.log(playGame()); 
