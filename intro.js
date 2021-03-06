var boxEvent = (function () {
  let ringFound = false;
  return val => {
    if (ringFound || val < 10) return;
    ringFound = true;
    setInterval (_ => {
    	resources.mana.val = Math.min(resources.mana.val+1, resources.manaMax.val);
  	}, 1000);
    document.querySelector('#sidebar').classList.remove('hidden');
    document.querySelector('#tabs #header').classList.remove('hidden');
    document.querySelector('#tab2').innerText = "Research";
    document.querySelector('#tab2').classList.remove('unClick');
    document.querySelector('log').classList.remove('hidden');
    log("You found a ring under a box!");
  };
})();

function onBoxMoved () {
  resources.boxesMoved.val++;
}
var inProgress = 0;
var introStage = 0;
function introButtonClicked () {
  if (inProgress){return;} else if (introStage==5){return;} else { 
  	const prg = document.querySelector('#ring-intro-btn .progress');
  	let progress = 0;
  	inProgress = 1;

  	const si = setInterval(function () {
      progress = Math.min(progress+1, 100);
      prg.style.width = progress + '%';
      if (progress < 100) return;
      clearInterval(si);
      prg.style.width = 0;
      inProgress = 0;
      document.querySelector('#ring-intro-btn .label').innerText =
      [ "Turn it right side up"
      , "Stare at it"
      , "Wipe the stone"
      , "Wave your hand around"
      , "The ring zapped with magic!"
      ][introStage++];
  	}, 1000/60);
  }
}
