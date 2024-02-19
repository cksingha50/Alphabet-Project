
// function play(){
//     // 1.hide the home screen

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
// }

//  // 2. show the play ground

// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden');




function buttonPress(event){
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }
    // console.log('player pressed', playerPressed);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        // console.log('you win');
        const currentScore = getTextElementById('current-score'); 
        const updatedScore = currentScore + 1;
        setTextElementById('current-score', updatedScore);


        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
       


        
        // currentScoreElement.innerText = newScore;

        removeBackground(expectedAlphabet);
        continueGame();
    }else{

        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementById('current-life',updatedLife);

        
        if(updatedLife ===0){
            // console.log('game Over !!')
            gameOver();
        }

        // console.log('you lost');
        // const lifeElement = document.getElementById('current-life');
        // const lifeText = lifeElement.innerText;
        // const life = parseInt(lifeText);

        // const newLife = life - 1;
        // lifeElement.innerText = newLife;

    }

}

document.addEventListener('keyup', buttonPress);

function continueGame(){
    const alphabet = randomAlphabet();
    // console.log('Your Alphabet :',alphabet)

    //set random generated alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}

function play(){
    hideElement('home-screen');
    hideElement('final-score');
    showElement('play-ground');

    setTextElementById('current-life',5);
    setTextElementById('current-score',0);

    continueGame();

}

function gameOver(){

    hideElement('play-ground');
    showElement('final-score');

    const lastScore = getTextElementById('current-score');
    console.log(lastScore);
    setTextElementById('last-score',lastScore);


    const currentAlpha = getElementText('current-alphabet');
    removeBackground(currentAlpha);

}