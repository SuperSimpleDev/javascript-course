// Below are 3 parts that need to be
// changed in the JavaScript code for
// this exercise.
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

  } else if (event.key === 'Backspace') {
    // Update 'Backspace' to show the
    // confirmation message instead of
    // resetting the score immediately.
    showResetConfirmation();
  }
});

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    // Update the click event listener to
    // show the confirmation message instead
    // of restting the score immediately.
    showResetConfirmation();
  });

// Function for showing the confirmation message.
function showResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;
  
  // You could use onclick="..." in the HTML above,
  // but it's recommended to use .addEventListener()
  document.querySelector('.js-reset-confirm-yes')
    .addEventListener('click', () => {
      resetScore();
      hideResetConfirmation();
    });
  
  document.querySelector('.js-reset-confirm-no')
    .addEventListener('click', () => {
      hideResetConfirmation();
    });
}

// A helper function (it helps us reuse the
// code for hiding the confirmation message).
function hideResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = '';
}