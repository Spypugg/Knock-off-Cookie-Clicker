// Declare Variables
let numCookie = 0;
let cookieClick = 1;
let cursor = 0;
let cursorAmt = document.getElementById("cursor-amount");
let cursorCPS = cursor * 0.1;
let cursorCost = 10;
let cursorCostAmount = document.getElementById("cursor-cost");
let grandma = 0;
let grandmaAmt = document.getElementById("grandma-amount");
let grandmaCPS = grandma * 1;
let grandmaCost = 100;
let grandmaCostAmount = document.getElementById("grandma-cost");
let farm = 0;
let farmAmt = document.getElementById("farm-amount");
let farmCPS = farm * 8;
let farmCost = 1200;
let farmCostAmount = document.getElementById("farm-cost");
let pointerUPG = 0;
let pointerUPGAmt = document.getElementById("pointerUPG-amount");
let pointerUPGCost = 100;
let pointerUPGCostAmount = document.getElementById("pointerUPG-cost");
let pointerMult = 1;
let cursorUPG = 0;
let cursorUPGAmt = document.getElementById("cursorUPG-amount");
let cursorUPGCost = 100;
let cursorUPGCostAmount = document.getElementById("cursorUPG-cost");
let cursorMult = 1;
let grandmaMult = 1;
let farmMult = 1;
let cps = 0;
let jar = document.getElementById("jar");

// Main Functions and Event Listners

// loop thing

document.getElementById("btn").addEventListener("click", btnClicked);
document
  .getElementById("cursor-buy")
  .addEventListener("click", cursorBuyClicked);
document
  .getElementById("grandma-buy")
  .addEventListener("click", grandmaBuyClicked);
document.getElementById("farm-buy").addEventListener("click", farmBuyClicked);
document
  .getElementById("pointer-upgrade")
  .addEventListener("click", pointerUPGClicked);
document
  .getElementById("cursor-upgrade")
  .addEventListener("click", cursorUPGClicked);

//Updating and timing

function update() {
  jar.innerHTML = numCookie.toFixed(1);
  document.title = numCookie.toFixed(1) + " Cookies";
  cps = cursorCPS * cursorMult + grandmaCPS * grandmaMult + farmCPS * farmMult;
  document.getElementById("total-CPS").innerHTML =
    "Total Cookies Per Second = " + cps.toFixed(1);
}

function timer() {
  numCookie = numCookie + cursorCPS * cursorMult;
  numCookie = numCookie + grandmaCPS * grandmaMult;
  numCookie = numCookie + farmCPS * farmMult;
  update();
}

setInterval(timer, 1000);

function btnClicked() {
  numCookie += cookieClick * pointerMult;
  console.log("Cookie Click");
  update();
}

//Cursor Buying
function cursorBuyClicked() {
  if (numCookie >= cursorCost) {
    cursor += 1;
    cursorAmt.innerHTML = "Cursors " + cursor;
    numCookie -= cursorCost;
    cursorCost *= 1.3;
    cursorCost = Math.round(cursorCost);
    cursorCostAmount.innerHTML = cursorCost;
    cursorCPS = cursor * 0.1;
    update();
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}

//Grandma Buying
function grandmaBuyClicked() {
  if (numCookie >= grandmaCost) {
    grandma += 1;
    grandmaAmt.innerHTML = "Grandmas " + grandma;
    numCookie -= grandmaCost;
    grandmaCost *= 1.3;
    grandmaCost = math.round(grandmaCost);
    grandmaCostAmount.innerHTML = grandmaCost;
    grandmaCPS = grandma * 1;
    update();
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}

//Farm Buying
function farmBuyClicked() {
  if (numCookie >= farmCost) {
    farm += 1;
    farmAmt.innerHTML = "Farms " + farm;
    numCookie -= farmCost;
    farmCost *= 1.3;
    farmCost = Math.round(farmCost);
    farmCostAmount.innerHTML = farmCost;
    farmCPS = farm * 8;
    update();
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}

//Upgrades

//Pointer upgrade
function pointerUPGClicked() {
  if (numCookie >= pointerUPGCost) {
    pointerUPG += 1;
    pointerUPGAmt.innerHTML = "Pointer upgrades " + pointerUPG;
    numCookie -= pointerUPGCost;
    pointerUPGCost *= 2;
    pointerUPGCost = Math.round(pointerUPGCost);
    pointerUPGCostAmount.innerHTML = pointerUPGCost;
    pointerMult *= 2;
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}

//Cursor upgrade
function cursorUPGClicked() {
  if (numCookie >= cursorUPGCost) {
    cursorUPG += 1;
    cursorUPGAmt.innerHTML = "Cursor upgrades " + cursorUPG;
    numCookie -= cursorUPGCost;
    cursorUPGCost *= 5;
    cursorUPGCost = Math.round(cursorUPGCost);
    cursorUPGCostAmount.innerHTML = cursorUPGCost;
    cursorMult *= 2;
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}
