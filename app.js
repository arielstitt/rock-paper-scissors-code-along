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
    });
};

//call all the inner function
startGame();

}

//start the game
game();