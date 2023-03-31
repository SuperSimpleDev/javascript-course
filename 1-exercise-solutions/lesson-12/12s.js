/*
  Get the auto play button using the DOM and
  use .addEventListener()
  See 12r.js for the full code.
*/
document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });