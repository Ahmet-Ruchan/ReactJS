const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult() 
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //or you can use 3
    
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    else if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    else{
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'Its a Draw!'
    }
    else if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'User Win!'
    }
    else if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'Computer Win!'
    }
    else if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'Computer Win!'
    }
    else if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'User Win!'
    }
    else if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'User Win!'
    }
    else if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'Computer Win!'
    }
    resultDisplay.innerHTML = result;
}