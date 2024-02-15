
function continueGame() {
    const alphabet = getARandomAlphabet();

    const alphabetDisplayElement = document.getElementById('show-alphabet')
    alphabetDisplayElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function handleKeyboardKeyup(event) {

    // player pressed

    

    console.log(event.key);
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

       

  

    // current alphabet

    const currentAlphabet = document.getElementById('show-alphabet');

    const expectedAlphabet = currentAlphabet.innerText.toLowerCase();

    // game over if pressed Escape

    if(playerPressed === 'Escape'){

        const lastAlphabet = expectedAlphabet;
        console.log(lastAlphabet)
        removeBackgroundColorById(lastAlphabet);

        gameOver();

                   
       
    }
    

   


    if (playerPressed === expectedAlphabet) {


        continueGame();
        removeBackgroundColorById(expectedAlphabet);

        // get the current score 

        const currentScore = getTextValueById('current-score');
        console.log('the current score is', currentScore);

        // update the score

        const newScore = currentScore + 1;

        // set the update score in the display

        const scoreElement = document.getElementById('current-score');
        scoreElement.innerText = newScore;

         // get the final score element
            // set the last score

            const finalDisplayScoreElement = getAElementById('final-score');
            finalDisplayScoreElement.innerText = newScore;


    }
    else {
        console.log('click the right key');

        // get the current life
        const currentLife = getTextValueById('current-life')
        console.log('the current life is ', currentLife);
        // update the current life
        const updatedLife = currentLife - 1;
        // display the current life
        const lifeElement = document.getElementById('current-life');
        lifeElement.innerText = updatedLife;

        // game over 
        if (updatedLife === 0) {

            // get the alphabet 
            // remove the background color

            const lastAlphabet = expectedAlphabet;
            console.log('last alphabet is ', lastAlphabet);

            removeBackgroundColorById(lastAlphabet);


            gameOver();

        }


    }

}


document.addEventListener('keyup', handleKeyboardKeyup);

function play() {

    hideElementById('home-section');
    hideElementById('score-section');
    showElementById('playground-section');

    reset('current-life', 5);
    reset('current-score', 0)


    continueGame();


    //     const homeSection = document.getElementById('home-section');
    //     homeSection.classList.add('hidden');

    //     const playgroundSection = document.getElementById('playground-section');
    //     playgroundSection.classList.remove('hidden');


}

