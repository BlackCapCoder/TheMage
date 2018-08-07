resources = {};

function mkResource (name, val=0, els=[]) {
  const r = (resources[name] = new Proxy (
    { els: els },
    { set: function (obj, prop, val) {
        if (prop != 'val') return;
        obj[prop] = val;
        for (let e of obj.els) e.innerText = val;
      }
    }
  ));

  r.val = val;
  return r;
}

window.addEventListener('load', _ => {
  mkResource('boxesMoved', 0, [document.querySelector('.boxes-moved')]);
});

function onBoxMoved () {
  resources.boxesMoved.val++;
}
