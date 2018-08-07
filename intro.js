window.addEventListener('load', _ => {
  mkResource
    ( 'boxesMoved'
    , 0
    , [ document.querySelector('.boxes-moved') ]
    , [ boxEvent ]
    );
});

var boxEvent = (function () {
  let ringFound = false;
  return val => {
    if (ringFound || val < 10) return;
    ringFound = true;
    document.querySelector('#ring').classList.remove('hidden');
  };
})();

function onBoxMoved () {
  resources.boxesMoved.val++;
}
