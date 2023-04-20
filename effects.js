// Declare Variables
let myAudio = document.querySelector("#audio");
let VFXaudio = document.querySelector("#crunch-audio");
let dingAudio = document.querySelector("#dingAudio");
var VFXtf = false;

// Event Listners
document.getElementById("btn").addEventListener("mousedown", cookieClickeddown);
document.getElementById("btn").addEventListener("mouseup", cookieClickedup);
document.getElementById("apply").addEventListener("click", applyClicked);
document.getElementById("btn").addEventListener("click", VFXcookie);
document
  .getElementById("pointer-upgrade")
  .addEventListener("click", pointerUpgDing);
document
  .getElementById("cursor-upgrade")
  .addEventListener("click", cursorUpgDing);
document.getElementById("cursor-buy").addEventListener("click", cursorBuyDing);
document
  .getElementById("grandma-buy")
  .addEventListener("click", grandmaBuyDing);
document.getElementById("farm-buy").addEventListener("click", farmBuyDing);
// Options Value Input

function applyClicked() {
  let BM = document.getElementById("backgroundMusic").value;
  let VFX = document.getElementById("VFX").value;
  // Background Music
  if (BM === "yesBM") {
    myAudio.play();
    console.log(`Yes to background music`);
  } else if (BM === "noBM") {
    myAudio.pause();
    console.log(`No to backgroundmusic`);
  }

  // VFX if statements
  if (VFX === "yesVFX") {
    VFXtf = true;
    console.log(`Yes to VFX`);
  } else if (VFX === "noVFX") {
    VFXtf = false;
    console.log(`No to VFX`);
  }
}

// Image Changer for Cookie Clicker

function cookieClickeddown() {
  document.getElementById("btn").style.backgroundImage =
    "url(img/crushedCookie.jpg)";
  document.getElementById("btn").width = "200";
  document.getElementById("btn").height = "200";
}

function cookieClickedup() {
  document.getElementById("btn").style.backgroundImage =
    "url(img/notCrushedCookie.jpg)";
  document.getElementById("btn").width = "200";
  document.getElementById("btn").height = "200";
}

// play crunch when clicked
function VFXcookie() {
  if ((VFXtf = true)) {
    VFXaudio.play();
    console.log(`Crunch Played`);
  } else if ((VFXtf = false)) {
  }
}

// play dings when upgrade are clicked
// Pointer Upgrade
function pointerUpgDing() {
  if ((VFXtf = true)) {
    dingAudio.play();
    console.log(`Ding Played`);
  } else if ((VFXtf = false)) {
    console.log(`ding not played`);
  }
}
// Cursor Upgrade
function cursorUpgDing() {
  if ((VFXtf = true)) {
    dingAudio.play();
    console.log(`Ding Played`);
  } else if ((VFXtf = false)) {
    console.log(`ding not played`);
  }
}

// play dings when cookie makers are purchased
// Cursor Bought
function cursorBuyDing() {
  if ((VFXtf = true)) {
    dingAudio.play();
    console.log(`Ding Played`);
  } else if ((VFXtf = false)) {
    console.log(`ding not played`);
  }
}
// Grandma Bought
function grandmaBuyDing() {
  if ((VFXtf = true)) {
    dingAudio.play();
    console.log(`Ding Played`);
  } else if ((VFXtf = false)) {
    console.log(`ding not played`);
  }
}
// Farm Bought
function farmBuyDing() {
  if ((VFXtf = true)) {
    dingAudio.play();
    console.log(`Ding Played`);
  } else if ((VFXtf = false)) {
    console.log(`ding not played`);
  }
}
