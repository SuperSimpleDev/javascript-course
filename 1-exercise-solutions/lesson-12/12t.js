// See 12r.js for the full code.
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    
    // When the game is auto playing, change
    // the text in the button to 'Stop Playing'.
    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Stop Playing';

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;

    // When the game is not playing, change
    // the text back to 'Auto Play'.
    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Auto Play';
  }
}