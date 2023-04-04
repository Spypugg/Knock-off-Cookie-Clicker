// Declare Variables
let cps2 = 0
let ainput = 0;

// Main Functions and Event Listners

// loop thing
setInterval(clock, 1000);
let numCookie = 0;

function clock() {

    document
  .getElementById("grandma-upgrade")
  .addEventListener("click", grandmaUpgradeClicked);

  document
  .getElementById("cursor-upgrade")
  .addEventListener("click", cursorUpgradeClicked);

    function grandmaUpgradeClicked() {
        cps2 += 1;
      }
    
      function cursorUpgradeClicked() {
        cps2 += 0.1;
      }
  cps2 += ainput;
  let output = numCookie + cps2;
  let moutput = output.toFixed(1);
  document.getElementById("jar").innerHTML = moutput;
}
