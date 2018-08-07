// frm for format. This basically means so that if your system clock says 8:03:12 AM, it'll look like 8:03:12 instead of 8:3:12.
function frm(i) {
  if (i<10) {
    i = "0" + i;
  }
  return i;
}

function getTimestamp () {
  const d = new Date();
  const h = frm(d.getHours());
  const m = frm(d.getMinutes());
  const s = frm(d.getSeconds());
  return "[" + h + ":" + m + ":" + s + "]";
}


// Moves the current logs down the chat and adds the new one to the top.
// Doing this backwards is the easiest way to do it (going from bottom to top).
// Conveniently, removes logs that are too old.
function log (msg) {
  const cont = document.querySelector('log');

  const el = document.createElement('span');
  el.classList.add('log-message');
  el.innerText = getTimestamp() + " " + msg;
  cont.insertBefore(el, cont.children[0]);

  if (cont.children.length > 30)
    cont.removeChild(cont.children[30]);
}

