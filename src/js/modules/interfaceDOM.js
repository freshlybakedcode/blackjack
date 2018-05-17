// We're gonna hook up some stuff to the buttons in the DOM

const hitDOM = document.getElementById('hit');
const stickDOM = document.getElementById('stick');
const splitDOM = document.getElementById('split');

hitDOM.addEventListener('click', () => {
  console.log('clicky');
});

stickDOM.addEventListener('click', () => {
  console.log('stickDOM');
});

splitDOM.addEventListener('click', () => {
  console.log('splitDOM');
});

