
let machineChoice
let heroChoice
let textResult
let divResultPosition = document.getElementById("round-result-text")
let HeroScore = 0
let MachineScore = 0
let scorePosition = document.getElementById("score-counter")
let buttons = document.querySelectorAll("button")
let finalResultPosition = document.getElementById("final-result")



function getMachineChoice () {
  let randomNumber 
  randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
      case 0:
        return machineChoice= "rock";
        break;
      case 1:
        return machineChoice= "paper";
        break;
      case 2:
        return machineChoice = "scissors";
        break;
      default:
    }
}



function playRound(heroChoice, machineChoice){
  //console.log("fonction playround starting")
  // this call the getComputerChoice every time, to get a different value
  machineChoice = getMachineChoice()
  //console.log(`the machine choose ${machineChoice}`)
  
  
  // Draw
      if (heroChoice === machineChoice) {
      textResult = "it's a draw"
      roundNumber++
      roundCounter()
      scorePosition.innerText = `you : ${HeroScore} machine ${MachineScore}`
      return divResultPosition.innerHTML=textResult

      // player win  
      } else if (machineChoice === "rock" && heroChoice === "paper"){
      textResult = "Paper beats rock, you won";
      HeroScore++
      roundNumber++
      roundCounter()
      scorePosition.innerText = `you : ${HeroScore} machine ${MachineScore}`
      return divResultPosition.innerHTML=textResult

    } else if (machineChoice === "scissors" && heroChoice === "rock"){
      textResult = "Rock beats paper, you won";
      HeroScore++
      roundNumber++
      roundCounter()
      scorePosition.innerText = `you : ${HeroScore} machine ${MachineScore}`
      return divResultPosition.innerHTML=textResult

    } else if (machineChoice === "paper" && heroChoice === "scissors"){
      textResult =  "scissors beats paper, you won";
      HeroScore++
      roundNumber++
      roundCounter()
      scorePosition.innerText = `you : ${HeroScore} machine ${MachineScore}`
      return divResultPosition.innerHTML=textResult

  // player lose (3 cases)
    } else if (machineChoice === "paper" && heroChoice === "rock"){
      textResult =  "Your rock was wrapped by the machine paper, you lose";
      MachineScore++
      roundNumber++
      roundCounter()
      scorePosition.innerText = `you : ${HeroScore} machine ${MachineScore}`
      return divResultPosition.innerHTML=textResult
    } else if (machineChoice === "scissors" && heroChoice === "paper"){
      textResult =  "your paper was cutted by the machine scissors, you lose";
      MachineScore++
      roundNumber++
      roundCounter()
      scorePosition.innerText = `you : ${HeroScore} machine ${MachineScore}`
      divResultPosition.innerHTML=textResult

    } else if (machineChoice === "rock" && heroChoice === "scissors"){
      textResult =  "your scissors were broken by the machine rock, you lose ";
      MachineScore++
      roundNumber++
      roundCounter()
      scorePosition.innerText = `you : ${HeroScore} machine ${MachineScore}`
      divResultPosition.innerHTML=textResult

    } else {
      return textResult =   "Could not make a choice of who win and lose in the if statement";
    } {
      
  }
}




// Ici, on trigger le round au click d'un bouton
// on créé une fonction for each, pour tous nous element button element

let roundNumber = 0


buttons.forEach((buttonElement) => {

  // and for each one we add a 'click' listener
  buttonElement.addEventListener('click', () => {
    heroChoice=buttonElement.id;
    //console.log(`the hero chose ${heroChoice}`)
    playRound(heroChoice,machineChoice)
    //console.log(textResult)
    
    
  });
});

const roundCounter = () => { 
  console.log(`the machine score is${MachineScore}`)
  console.log(`the here score is${HeroScore}`)
if (HeroScore===5) {
  finalResultPosition.innerText = `You won!`
} else if (MachineScore===5) {
  finalResultPosition.innerText = `You lose :(`
}
}










/*

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

*/
