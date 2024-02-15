
function hideElementById(elementId) {

    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElementById(elementId) {
    const element = document.getElementById(elementId);

    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    const alphabetsArray = alphabets.split('')
    // console.log(alphabetsArray);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    // console.log(index)

    const alphabet = alphabetsArray[index]
    // console.log(alphabet)

    return alphabet;


}

function setBackgroundColorById(elementId) {

    const element = document.getElementById(elementId);

    element.classList.add('bg-orange-400');


}

function removeBackgroundColorById(elementId) {

    const element = document.getElementById(elementId)

    element.classList.remove('bg-orange-400');

}

function getTextValueById(elementId) {

    const element = document.getElementById(elementId);
    const textValue = element.innerText;
    const value = parseInt(textValue);
    return value;
}

function gameOver() {

    
    // hide and show element

    hideElementById('playground-section');
    showElementById('score-section');

}
function getAElementById(elementId) {
    const element = document.getElementById(elementId);

    return element;
}

function reset(elementId, value) {

    // get the the life element
    const element = getAElementById(elementId);
    element.innerText = value;
    // set the initial life score 
}