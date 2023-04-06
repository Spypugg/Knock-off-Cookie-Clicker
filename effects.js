document.getElementById("btn").addEventListener("mousedown", cookieClickeddown);
document.getElementById("btn").addEventListener("mouseup", cookieClickedup);

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
