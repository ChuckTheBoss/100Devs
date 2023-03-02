//Create a button that adds 1 to a botScore stored in localStorage 

document.querySelector('button').addEventListener('click', adder)
if (!localStorage.getItem("botScore")) {
    localStorage.setItem("botScore", 0);
}
document.querySelector("h2").innerText = botScore;
function adder() {
    let botScore = localStorage.getItem("botScore");
    botScore++;
    localStorage.setItem("botScore", botScore);
    document.querySelector("h2").innerText = botScore;
}