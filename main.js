// Declare Variables
let cps2 = 0;
let ainput = 0;

// Main Functions and Event Listners

// loop thing

let numCookie = 0;

document
  .getElementById("grandma-upgrade")
  .addEventListener("click", grandmaUpgradeClicked);

document
  .getElementById("cursor-upgrade")
  .addEventListener("click", cursorUpgradeClicked);

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  numCookie += 1;
  console.log("Cookie Click");
  let output = numCookie + cps2;
  let moutput = output.toFixed(1);
  document.getElementById("jar").innerHTML = moutput;
}

function grandmaUpgradeClicked() {
  setInterval(clock, 1000);
  function clock() {
    cps2 += 1;
    cps2 += ainput;
    let output = numCookie + cps2;
    let moutput = output.toFixed(1);
    document.getElementById("jar").innerHTML = moutput;
  }
}

function cursorUpgradeClicked() {
  setInterval(clock, 1000);
  function clock() {
    cps2 += 0.1;
    cps2 += ainput;
    let output = numCookie + cps2;
    let moutput = output.toFixed(1);
    document.getElementById("jar").innerHTML = moutput;
  }
}
