
function continueGame (){
   const alphabet = getARandomAlphabet();

   const alphabetDisplayElement = document.getElementById('show-alphabet')
   alphabetDisplayElement.innerText = alphabet;

   setBackgroundColorById(alphabet);
}

function play(){

    hideElementById('home-section');
    showElementById('playground-section');
    continueGame();
    

//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground-section');
//     playgroundSection.classList.remove('hidden');


}

