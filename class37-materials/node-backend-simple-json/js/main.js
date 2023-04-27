document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq() {

  const userChoice = document.querySelector("#userChoice").value;
  const res = await fetch(`/api?choice=${userChoice}`)
  const data = await res.json()

  console.log(data);
  document.querySelector(".userChoice").textContent = "Your choice: " + data.userChoice
  document.querySelector(".machineChoice").textContent = "Machine choice: " + data.machineChoice
  document.querySelector(".result").textContent = data.result
}