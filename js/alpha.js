
// function play(){
//     // 1.hide the home screen

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
// }

//  // 2. show the play ground

// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden');

function continueGame(){
    const alphabet = randomAlphabet();
    console.log('Your Alphabet :',alphabet)

    //set random generated alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}

function play(){
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();
}