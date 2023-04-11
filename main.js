// Declare Variables
let cps = 0;
let ainput = 0;
let numCookie = 0;
let cookieClick = 1;
let cursor = 0;
let cursorCost = document.getElementById("cursor-cost");
let cursorCostAmount = Math.round(10);
let grandma = 0;
let grandmaCost = document.getElementById("grandma-cost");
let grandmaCostAmount = Math.round(100);
let farm = 0;
let farmCost = document.getElementById("farm-cost");
let farmCostAmount = Math.round(1200);
let pointerUPG = 0;
let pointerUPGCost = document.getElementById("cursorUPG-cost");
let pointerUPGCostAmount = Math.round(100);

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

function btnClicked() {
  numCookie += cookieClick;
  console.log("Cookie Click");
  let output = numCookie + cps;
  let moutput = output.toFixed(1);
  document.getElementById("jar").innerHTML = moutput;
  console.log(numCookie);
}

//Cursor Buying
function cursorBuyClicked() {
  if (numCookie >= cursorCostAmount) {
    cursor += 1;

    let outputcps = `Cursor ${cursor}`;

    document.getElementById("Cursor-Buy").innerHTML = outputcps;
    cps += 0.1;

    // Cursor Clicker Per Second Output
    let cpsOutput = `Total Cookies Per Second = ${cps.toFixed(1)}`;
    document.getElementById("total-CPS").innerHTML = cpsOutput;
    console.log(cpsOutput);

    //Buying Cursors
    numCookie -= cursorCostAmount;
    cursorCostAmount *= 1.3;
    let cursorCostOutput = Math.round(cursorCostAmount);
    cursorCost.innerHTML = cursorCostOutput;

    setInterval(clock, 1000);
    function clock() {
      numCookie += 0.1;
      cps += ainput;
      let output = numCookie.toFixed(1);
      document.getElementById("jar").innerHTML = output;
      console.log(`Cookies = ${numCookie}`);
    }
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}

//Grandma Buying
function grandmaBuyClicked() {
  if (numCookie >= grandmaCostAmount) {
    grandma += 1;

    let outputgrandma = `Grandmas ${grandma}`;

    // Grandma Update Clicks Per Second
    document.getElementById("Grandma-Buy").innerHTML = outputgrandma;
    cps += 1;

    // Grandma Clicks Per Second Output
    let cpsOutput = `Total Cookies Per Second = ${cps.toFixed(1)}`;
    document.getElementById("total-CPS").innerHTML = cpsOutput;
    console.log(cpsOutput);

    //Buying Grandmas
    numCookie -= grandmaCostAmount;
    grandmaCostAmount *= 1.3;
    let grandmaCostOutput = Math.round(grandmaCostAmount);
    grandmaCost.innerHTML = grandmaCostOutput;

    setInterval(clock, 1000);
    function clock() {
      numCookie += cookieClick;
      cps += ainput;
      let output = numCookie.toFixed(1);
      document.getElementById("jar").innerHTML = output;
      console.log(`Cookies = ${numCookie}`);
    }
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}

//Farm Buying
function farmBuyClicked() {
  if (numCookie >= farmCostAmount) {
    farm += 1;

    let outputfarm = `Farms ${farm}`;

    // Farm Update CPS
    document.getElementById("Farm-Buy").innerHTML = outputfarm;
    cps += 8;

    //Farm CPS Output

    let cpsOutput = `Total Cookies Per Second = ${cps.toFixed(1)}`;
    document.getElementById("total-CPS").innerHTML = cpsOutput;
    console.log(cpsOutput);

    //Buying Farms
    numCookie -= farmCostAmount;
    farmCostAmount *= 1.3;
    let farmCostOutput = Math.round(farmCostAmount);
    farmCost.innerHTML = farmCostOutput;

    setInterval(clock, 1000);
    function clock() {
      numCookie += 8;
      cps += ainput;
      let output = numCookie.toFixed(1);
      document.getElementById("jar").innerHTML = output;
      console.log(`Cookies = ${numCookie}`);
    }
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}

//Upgrades

//Pointer upgrade
function pointerUPGClicked() {
  if (numCookie >= pointerUPGCostAmount) {
    pointerUPG += 1;

    let outputcursorUPG = `Pointer upgrades ${pointerUPG}`;

    //Pointer Upgrade Update
    document.getElementById("Pointer-Upgrade").innerHTML = outputcursorUPG;
    cookieClick *= 2;

    //Buying Pointer upgrade
    numCookie -= pointerUPGCostAmount;
    pointerUPGCostAmount *= 5;
    let pointerUPGCostOutput = Math.round(pointerUPGCostAmount);
    pointerUPGCost.innerHTML = pointerUPGCostOutput;
  }
}
