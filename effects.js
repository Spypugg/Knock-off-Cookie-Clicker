// Cursor Upgrade

document
  .getElementById("cursor-upgrade")
  .addEventListener("click", cursorUpgradeClicked);

// Declare Upgrade Variable
let cursor = 0;
let grandma = 0;

// Declare Clicks Per Second Variable
let cps = 0;

// Cursor Main Function
function cursorUpgradeClicked() {
  cursor += 1;

  let outputcps = `Cursor ${cursor}`;

  document.getElementById("Cursor-Upgrade").innerHTML = outputcps;
  cps += 0.1;

  // Cursor Clicker Per Second Output
  let cpsOutput = `Total Cookies Per Second = ${cps.toFixed(1)}`;
  document.getElementById("total-CPS").innerHTML = cpsOutput;
  console.log(cpsOutput);
}

// Grandma Upgrade
document
  .getElementById("grandma-upgrade")
  .addEventListener("click", grandmaUpgradeClicked);

// Grandma Main Function
function grandmaUpgradeClicked() {
  grandma += 1;

  let outputgrandma = `Grandmas ${grandma}`;

  // Grandma Update Clicks Per Second
  document.getElementById("Grandma-Upgrade").innerHTML = outputgrandma;
  cps += 1;

  // Grandma Clicks Per Second Output
  let cpsOutput = `Total Cookies Per Second = ${cps.toFixed(1)}`;
  document.getElementById("total-CPS").innerHTML = cpsOutput;
  console.log(cpsOutput);
}
