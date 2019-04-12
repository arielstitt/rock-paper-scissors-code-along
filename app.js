//Funtion that encompasses the entire game
const game = () => {

//score 
let pScore = 0;
let cScore = 0;

//start game
const startGame = () => {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playButton.addEventListener('click', ()=> {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
    });
};

//Play Match

const playMatch = () => {
    //options for rock paper scissors
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];
    //generate a random number between 0-2
    
    
}
//call all the inner function
startGame();

}

//start the game
game();