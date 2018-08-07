critter = {}
critters =
  [ { name: "small spider", hp: 4 }
  , { name: "mouse",        hp: 7 }
  , { name: "kitten",       hp: 9 }
  , { name: "chicken",      hp: 6 }
  , { name: "soft cloud",   hp: 8 }
  ];


function spawnCritter (c) {
  document.querySelector('#critter-name').innerText = c.name;
  renderCritterHP(c.hp);
  critter = JSON.parse(JSON.stringify(c));
  critter.max = critter.hp;
}

function drawCritter () {
  spawnCritter(critters[Math.ceil(Math.random() * (critters.length-1))]);
}

function renderCritterHP (val, max) {
  const el   = document.querySelector('#critter-hp');
  const bars = Math.round(val/max*20);
  let str = "";

  for (let i = 1; i < 20; i++)
    str += i > bars? '.': '=';

  el.innerText = str;
}

function pokeCritter (damage) {
  if (critter.hp <= 0) return;
  critter.hp = Math.max(0, critter.hp - damage);
  renderCritterHP(critter.hp, critter.max);
  if (critter.hp > 0) return;
  onCritterMurdered(critter)
  setTimeout(drawCritter, 1000);
}

// frm for format. This basically means so that if your system clock says 8:03:12 AM, it'll look like 8:03:12 instead of 8:3:12.
function frm(i) {
  if (i<10) {
    i = "0" + i;
  }
  return i;
}

function onCritterMurdered (c) {
  var d = new Date();
  var h = frm(d.getHours());
  var m = frm(d.getMinutes());
  var s = frm(d.getSeconds());

  // Moves the current logs down the chat and adds the new one to the top.
  // Doing this backwards is the easiest way to do it (going from bottom to top).
  // Conveniently, removes logs that are too old.

  document.querySelector('#log-message-c').innerText = document.querySelector('#log-message-b').innerText;
  document.querySelector('#log-message-b').innerText = document.querySelector('#log-message-a').innerText;
  document.querySelector('#log-message-a').innerText = "[" + h + ":" + m + ":" + s + "] You have defeated the " + c.name +"! You gain " + c.max + " gold and " + Math.floor(c.max/2) + " exp!";

  resources.gold.val += c.max;
  resources.exp.val  += Math.floor(c.max/2);
}

function onLoad(){
  drawCritter();
  var d = new Date();
  var h = frm(d.getHours());
  var m = frm(d.getMinutes());
  var s = frm(d.getSeconds());

  document.querySelector('#log-message-a').innerText = "[" + h + ":" + m + ":" + s + "] You stand in your dusty basement."
}

window.addEventListener('load', onLoad);
