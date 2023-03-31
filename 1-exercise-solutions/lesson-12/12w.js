// See 12r.js for the full code.
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  
  // Add an if-statement condition to
  // check if 'Backspace' was pressed.
  } else if (event.key === 'Backspace') {
    resetScore();
  }
});