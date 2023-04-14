// Event Listners
document.getElementById("btn").addEventListener("mousedown", cookieClickeddown);
document.getElementById("btn").addEventListener("mouseup", cookieClickedup);
document.getElementById("apply").addEventListener("click", applyClicked);
// Options Value Input

// Declare Variables
var myAudio = document.querySelector("#audio");

function applyClicked() {
  let BM = document.getElementById("backgroundMusic").value;
  // Background Music
  if (BM === "yesBM") {
    myAudio.play();
    console.log(`yes to background music`);
  } else if (BM === "noBM") {
    myAudio.pause();
    console.log(`no to backgroundmusic`);
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
