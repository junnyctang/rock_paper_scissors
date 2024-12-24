/*function getComputerChoice(Rock, Paper, Scissors){
    return Math.random();
}

console.log(getComputerChoice(choice)) 

function getRandom(){
    return Math.random();
}

console.log(getRandom()) */

/*const choices = ["rock", "paper", "scissors"];
console.log(choices[Math.floor(Math.random() * (0 - 3) * (-1))])*/


function getComputerChoice(){
    
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * (3 - 0) + 0)]
}

/*console.log(getComputerChoice()) */

/* function playRound(playerSelection, computerSelection){

 if (playerSelection === "rock" && computerSelection === 'Paper'){
        console.log("You Lose! Paper beats rock")
    } else if (playerSelection === "rock" && computerSelection === 'Scissors'){
        console.log("You Win! Rock beats scissors")
    } else if (playerSelection === "paper" && computerSelection === "Scissors"){
        console.log("You Lose! Scissors beats paper!")
    } else if (playerSelection === "paper" && computerSelection === "Rock"){
        console.log("You Win! Paper beats rocks!")
    } else if (playerSelection === "scissors" && computerSelection === "Rock"){
        console.log("You Lose! Rock beats scissors!")
    } else if (playerSelection === "scissors" && computerSelection === "Paper"){
        console.log("You Win! Scissors beats paper!")
    } else {
        console.log("Its a tie!")
    }
} 
*/

/*const playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
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
   } */



/*console.log(playerSelection)
console.log(computerSelection) 
//console.log(playRound(playerSelection, computerSelection)); */


/*let gameCount = 0;
let playerScore = 0;
let computerScore = 0; */


/*let playerScore = 0 ;
let computerScore = 0 ;

function gameCount(){
            
    if ((playerSelection === "rock" && computerSelection === 'Scissors') || (playerSelection === "paper" && computerSelection === "Rock") || (playerSelection === "scissors" && computerSelection === "Paper")){
        return playerScore += 1
    } else if ((playerSelection === "rock" && computerSelection === 'Paper') ||(playerSelection === "paper" && computerSelection === "Scissors") || (playerSelection === "scissors" && computerSelection === "Rock")){
        return computerScore = computerScore += 1
    };

}
*/


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


/*let playerScore = 0 ;
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
       

}

if (playerScore > computerScore) {
    console.log ("Congratulations. You Win!")
} else if (playerScore === computerScore) {
    console.log ("Y'all tied.")
} else {
    console.log ("You are Ass. Computer Wins!")
} */



/*let playerScore = 0 ;
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

    
}

if (playerScore > computerScore) {
    console.log("Congratulations. You Win!")
} else {
    console.log("You are Ass. Computer Wins!")
};

*/



 console.log(playGame()); 
 /*console.log(gameCount()); */

 
 /*console.log(computerSelection)
 console.log(playerSelection)*/
 
 
 /*console.log(playerScore);
 console.log(computerScore);
 console.log(tie); */
 
 
 
 
 
 
 
 /*console.log(playerScore);
 console.log(computerScore);
 console.log(gameCount); */







/*function gameOver() {
    if (playerscore > computerScore){
        return "Congratulations! You won the game."
    } else {
        return "Sorry! You suck, try again next time."
    }  


 } */
/* testing testing more testing*/

 