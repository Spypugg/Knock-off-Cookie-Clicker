// Declare Variables
// loop thing
setInterval(clock, 1000);
import { cps } from "./effects";
let numCookie = 0;
function clock() {
  cps += 0.1;
  let output = numCookie + cps;
  document.getElementById("total").innerHTML = output.toFixed(1);
  console.log(`${cps}`);
}
