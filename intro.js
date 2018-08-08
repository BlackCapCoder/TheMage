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
    document.querySelector('log').classList.remove('hidden');
    log("You found a ring under a box");
  };
})();

function onBoxMoved () {
  resources.boxesMoved.val++;
}
