var ringFound = false;

function moveBox(){
  boxesMoved++;
  document.getElementById('boxesMoved').innerHTML = boxesMoved;
  if (boxesMoved>=10){
	ringFound = true;
	alert('You found a ring');
  };
};
