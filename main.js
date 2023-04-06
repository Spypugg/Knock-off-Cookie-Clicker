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
  console.log(numCookie);
}

function grandmaUpgradeClicked() {
  if (numCookie >= 100) {
    grandma += 1;

    let outputgrandma = `Grandmas ${grandma}`;

    // Grandma Update Clicks Per Second
    document.getElementById("Grandma-Upgrade").innerHTML = outputgrandma;
    cps += 1;

    // Grandma Clicks Per Second Output
    let cpsOutput = `Total Cookies Per Second = ${cps.toFixed(1)}`;
    document.getElementById("total-CPS").innerHTML = cpsOutput;
    console.log(cpsOutput);

    setInterval(clock, 1000);
    function clock() {
      numCookie += 1;
      cps2 += ainput;
      let output = numCookie.toFixed(1);
      document.getElementById("jar").innerHTML = output;
      console.log(`Cookies = ${numCookie}`);
    }
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}

function cursorUpgradeClicked() {
  if (numCookie >= 10) {
    cursor += 1;

    let outputcps = `Cursor ${cursor}`;

    document.getElementById("Cursor-Upgrade").innerHTML = outputcps;
    cps += 0.1;

    // Cursor Clicker Per Second Output
    let cpsOutput = `Total Cookies Per Second = ${cps.toFixed(1)}`;
    document.getElementById("total-CPS").innerHTML = cpsOutput;
    console.log(cpsOutput);

    setInterval(clock, 1000);
    function clock() {
      numCookie += 0.1;
      cps2 += ainput;
      let output = numCookie.toFixed(1);
      document.getElementById("jar").innerHTML = output;
      console.log(`Cookies = ${numCookie}`);
    }
  } else {
    console.log(`You Don't Have Enough Cookies in The Cookie jar`);
    alert(`You Don't Have Enough Cookies in The Cookie jar`);
  }
}
