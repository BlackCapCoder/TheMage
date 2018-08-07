boxesMoved = 0;

function onBoxMoved () {
  document.querySelector('.boxes-moved').innerText = ++boxesMoved;
}
