document.querySelector("#purple").addEventListener("click", partyPurple);
document.querySelector("#green").addEventListener("click", partyGreen);
document.querySelector("#blue").addEventListener("click", partyBlue);

function partyPurple() {
  document.querySelector("body").style.background = "rgba(241,63,247,1)";
  document.querySelector("body").style.color = "white";
}

function partyGreen() {
  document.querySelector("body").style.background = "rgba(0,253,81,1)";
  document.querySelector("body").style.color = "white";
}

function partyBlue() {
  document.querySelector("body").style.background = "rgba(0,254,255)";
  document.querySelector("body").style.color = "white";
}

