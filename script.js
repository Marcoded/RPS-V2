// NEW ONE
// my computer choice is defined before the first fonction, so the result is always the same
// To Fix this, i added the I assigned the
let computerChoice
let textResult
let userScore = 0
let computerScore = 0
function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * 3);
  
  
  switch(computerChoice) {
    case 0:
       return computerChoice = "rock";
      break;
    case 1:
       return computerChoice = "paper";
      break;
    case 2:
       return computerChoice = "scissors";
      break;
    default:
       return text = "wrong choice";
  }
}
//computerChoice = getComputerChoice(computerChoice)
console.log("the computer choice is "+ computerChoice + " Round havent started yet");

function playRound(playerSelection, computerSelection){
    // this call the getComputerChoice every time, to get a different value
    computerChoice = getComputerChoice(computerChoice)
    console.log("round had started")
    computerSelection = computerChoice
    console.log(computerSelection)
    playerSelection = prompt("Make Your choice")
    
    // Draw
        if (playerSelection === computerSelection) {
        return textResult = "Draw"
        // player win  
        } else if (computerSelection === "rock" && playerSelection === "paper"){
        return textResult = "Paper beats rock, you won";
      } else if (computerSelection === "scissors" && playerSelection === "rock"){
        return "Rock beats paper, you won";
      } else if (computerSelection === "paper" && playerSelection === "scissors"){
        return textResult =  "scissors beats paper, you won";

    // player lose (3 cases)
      } else if (computerSelection === "paper" && playerSelection === "rock"){
        return textResult =  "Paper beats rock, you lose";
      } else if (computerSelection === "scissors" && playerSelection === "paper"){
        return textResult =  "scissors beats paper, you lose";
      } else if (computerSelection === "rock" && playerSelection === "scissors"){
        return textResult =  "rock beats scissors, you lose ";
      } else {
        return textResult =   "No results, player havent chose an sign, or wrong sign mb i dunno";
      } {
        
    }
}
//playRound()
//Bellow Launch Round, to get textResult Value
//textResult = playRound(textResult)

// runs the Playround func 5 times
function playGame() {
    for (let i = 0; i < 5; i++) {
        // should run Round 5 time
        textResult = playRound(textResult);
        alert(textResult);
        switch(textResult) {
            case "Paper beats rock, you won" :
            case "Rock beats paper, you won" :
            case "scissors beats paper, you won":
                userScore++
                alert("your score is" +userScore)
              break;
            case "Paper beats rock, you lose":
            case "scissors beats paper, you lose":
            case "rock beats scissors, you lose ":
                computerScore++
                
                alert("draco score is " +computerScore)
              break;
            default:
               alert("no point for anyone")
               break;
          }
        
           console.log("Your score is " + userScore);
           console.log("The computer score is " + computerScore);
        }
        alert("this loops is now over")
        alert(`the final score is you ${userScore}, draco ${computerScore} `)
        if (userScore>computerScore) {
            alert("you won!")
        } else if (userScore<computerScore) { 
            alert("you lose")
        } else {
            alert("thats a tie folks")
        }
    }

// Launching the loop
playGame()

// the score are not working correctly, investigate

