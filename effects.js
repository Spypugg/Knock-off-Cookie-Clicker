// Cursor Upgrade
document
  .getElementById("cursor-upgrade")
  .addEventListener("click", cursorUpgradeClicked);

let cursor = 0;

// Clicks Per Second Calculator
let cps = 0;

// Clicks Per Second Function
function cursorUpgradeClicked() {
  cursor += 1;

  let outputcps = `Cursor ${cursor}`;

  document.getElementById("cursor-upgrade").innerHTML = outputcps;
  cps += 0.1;

  let cpsOutput = `Total Clicks Per Second = ${cps}`;
  document.getElementById("total-CPS").innerHTML = cpsOutput;
}
