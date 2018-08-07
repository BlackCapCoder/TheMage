critter  = {};
critters =
  [ { name: "small spider", hp: 4, g: 3,  e: 1}
  , { name: "mouse",        hp: 7, g: 6,  e: 3}
  , { name: "kitten",       hp: 9, g: 2,  e: 8}
  , { name: "chicken",      hp: 6, g: 4,  e: 4}
  , { name: "soft cloud",   hp: 8, g: 10, e: 2}
  ];


function spawnCritter (c) {
  document.querySelector('#critter-name').innerText = c.name;
  renderCritterHP(c.hp);
  critter = JSON.parse(JSON.stringify(c)); // Hack to clone object
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


function onCritterMurdered (c) {
  resources.gold.val += c.g;
  resources.exp.val  += c.e;

  log ("You have defeated the " + c.name +"! You gain " + c.g + " gold and " + c.e + " exp!");
}

function onLoad(){
  drawCritter();
  log("You stand in your dusty basement.");
}

window.addEventListener('load', onLoad);
