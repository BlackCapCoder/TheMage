// frm for format. This basically means so that if your system clock says 8:03:12 AM, it'll look like 8:03:12 instead of 8:3:12.
function frm(i) {
  if (i<10) {
    i = "0" + i;
  }
  return i;
}


// Moves the current logs down the chat and adds the new one to the top.
// Doing this backwards is the easiest way to do it (going from bottom to top).
// Conveniently, removes logs that are too old.
function log (msg) {
  const d = new Date();
  const h = frm(d.getHours());
  const m = frm(d.getMinutes());
  const s = frm(d.getSeconds());

  document.querySelector('#log-message-c').innerText = document.querySelector('#log-message-b').innerText;
  document.querySelector('#log-message-b').innerText = document.querySelector('#log-message-a').innerText;
  document.querySelector('#log-message-a').innerText = "[" + h + ":" + m + ":" + s + "] " + msg; 
}

