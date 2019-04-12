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

        playButton.addEventListener('click', () => {
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

        //when the player buttons are clicked 
        options.forEach(option => {
            option.addEventListener('click', function () {
                //generate a random number between 0-2
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber]
                

                //This is where we call compare hands
            });
        });
    }
    
    //create a function that compares the hands between the comp and the player
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        
        //checking for a tie
        if(playerChoice == computerChoice){
            winner.textContent = 'It is a tie!';
            return;
        } 
        //check
        if(playerChoice == 'rock'){
            if(computerChoice == 'scissors'){
                winner.textContent = "Player wins";
                return;
            } else {
                winner.textContent = "Computer wins";
                return;
            }
        }
    }


    //call all the inner function
    startGame();
    playMatch();
}

//start the game
game();