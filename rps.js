console.log("Welcome! Let's play! Rock Paper Scissors!");

let getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    let choiceName = "";

    if (choice===0){
        choiceName = 'rock'
    } else if (choice===1){
        choiceName = 'paper'
    } else if (choice===2){
        choiceName = 'scissors'
    }
    console.log("Machine choose: " + choiceName);
    return choiceName;
}

let rpsgameround = (playerChoice, computerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    let gameswin;
    console.log("You choose: "+ playerChoice);
    if (playerChoice==computerChoice){
        console.log("Its a draw!");
    } else if ((playerChoice=='rock' && computerChoice=='paper') || (playerChoice=='paper' && computerChoice=='scissors') || (playerChoice=='scissors' && computerChoice=='rock')){
        console.log("You lose!");
        gameswin=0;
    } else if ((playerChoice=='rock' && computerChoice=='scissors') || (playerChoice=='paper' && computerChoice=='rock') || (playerChoice=='scissors' && computerChoice=='paper')){
        console.log("You win! Congrats!");
        gameswin=1;
    }
    return gameswin;
}

let rpsgame = () => {
    wingames = 0;
    lostgames = 0;
    games = 0;
    let win;
    for (let i = 0;i<5;i++){
        playerChoice = prompt('Enter rock, paper or scissors');
        win = rpsgameround(playerChoice,getComputerChoice());
        if (win==0) {
            games++;
            lostgames++;
        } else if (win==1){
            wingames++;
            games++;
        } else {
            games++;
        }
        console.log("You've won " + wingames + " out of 5.")
    }
    if (wingames>=3){
        console.log("Congrats! You won " + wingames + " out of 5 games.");
    } else {
        console.log("You lost " + lostgames + " out of 5 games...");
    }
    
}
rpsgame();