const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const resultUser = document.querySelector('.result1');
const resultCom = document.querySelector('.result2');

const message = document.querySelector('.message');
const messageChoice = document.querySelector('.messagechoose');

let userChoice=0;
let userPoints=0;
let comPoints=0;

rockButton.addEventListener('click', () => {
    userChoice=1;
    if(checkIf()){

    } else {
        
        gameRound(userChoice,comChoice());
    }
});

paperButton.addEventListener('click', () => {
    userChoice=2;
    if(checkIf()){

    } else {
        
        gameRound(userChoice,comChoice());
    }
});

scissorsButton.addEventListener('click', () => {
    userChoice=3;
    if(checkIf()){

    } else {
        
        gameRound(userChoice,comChoice());
    }
});

function gameRound(userChoice,comChoice){
    if(userChoice==comChoice){
        userDraw();
    } else if ((userChoice== 1 && comChoice==2) || (userChoice== 2 && comChoice==3) || (userChoice== 3 && comChoice==1)){
        userLost();
    } else if ((userChoice== 1 && comChoice==3) || (userChoice== 2 && comChoice==1) || (userChoice== 3 && comChoice==2)){
        userWin();
    }
}

function comChoice() {
    let choose=Math.floor(Math.random()*3)+1;
    if (choose==1){
        messageChoice.textContent = "Computer uses rock";
    } else if (choose==2){
        messageChoice.textContent = "Computer uses paper";
    } else if (choose==3){
        messageChoice.textContent = "Computer uses scissors";
    }
    return choose;
}

function userWin(){
    message.textContent="You win this round!";
    userPoints++;
    if (userPoints==5){
        resultUser.textContent = userPoints;
        userWonGame();
    } else {
        resultUser.textContent = userPoints;
    }
}

function userLost(){
    message.textContent="You lost...";
    comPoints++;
    if (comPoints==5){
        resultCom.textContent=comPoints;
        userLostGame();
    } else {
        resultCom.textContent=comPoints;
    }
}

function userDraw(){
    message.textContent="It's a draw!";
}

function userWonGame(){
    message.textContent="Congratulations, You won 5 rounds";
    messageChoice.textContent="Press any button to start playing again!"
}

function userLostGame(){
    message.textContent="Uhhhh, You lost versus the machine";
    messageChoice.textContent="Press any button to start playing again!"
}

function restartGame(){
    userPoints=0;
    comPoints=0;
    resultUser.textContent = userPoints;
    resultCom.textContent= comPoints;
    message.textContent="The first player that wins 5 rounds, WINS!";
    messageChoice.textContent="Pick a weapon!"
}
function checkIf(){
    if (userPoints==5 || comPoints==5){
        restartGame();
        return true;
    }
}