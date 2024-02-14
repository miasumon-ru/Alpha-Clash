
function hideElementById (elementId){

    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElementById(elementId){
    const element = document.getElementById(elementId);

    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    const alphabetsArray = alphabets.split('')
    // console.log(alphabetsArray);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    // console.log(index)

    const alphabet = alphabetsArray[index]
    // console.log(alphabet)

    return alphabet;


}

function setBackgroundColorById(elementId){

    const element = document.getElementById(elementId);

    element.classList.add('bg-orange-400');


}
