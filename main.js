resources = {};

function mkResource (name, val=0, els=[]) {
  return (resources[name] = new Proxy (
    { val: val, els: els },
    { set: function (obj, prop, val) {
        obj[prop] = val;
        for (let e of obj.els) e.innerText = val;
      }
    }
  ));
}

window.addEventListener('load', _ => {
  const r = mkResource('boxesMoved', 0,
    [ document.querySelector('.boxes-moved') ]
  );
  r.val = r.val;
});

function onBoxMoved () {
  resources.boxesMoved.val++;
}
