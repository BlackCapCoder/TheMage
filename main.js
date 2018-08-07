resources = {};

function mkResource (name, val=0, els=[], listeners=[]) {
  const r = (resources[name] = new Proxy (
    { els: els
    , listeners: listeners
    },
    { set: function (obj, prop, val) {
        if (prop != 'val') return;
        obj[prop] = val;
        for (let e of obj.els) e.innerText = val;
        for (let l of obj.listeners) l(val);
      }
    }
  ));

  r.val = val; // To initialize the graphics
  return r;
}

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
    alert("You found a ring!");
  };
})();

function onBoxMoved () {
  resources.boxesMoved.val++;
}
