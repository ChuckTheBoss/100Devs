//Example fetch using pokemonapi.co
document.querySelector('#newGame').addEventListener('click', getDeck)
document.querySelector('#draw').addEventListener('click', drawTwo)

function getDeck() {
  const url = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckID = data.deck_id;
      localStorage.setItem("deckID", deckID);
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}


function drawTwo() {
  const url = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector("#player1").src = data.cards[0].image;
      document.querySelector("#player2").src = data.cards[1].image;
      let player1Val = getNum(data.cards[0].value);
      let player2Val = getNum(data.cards[1].value);
      declareWinner(player1Val, player2Val);
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function declareWinner(player1Val, player2Val) {
  if (player1Val > player2Val) {
    document.querySelector("h3").innerText = "Player 1 Wins!"
  } else if (player1Val < player2Val) {
    document.querySelector("h3").innerText = "Player 2 Wins!"
  } else {
    document.querySelector("h3").innerText = "WAR"
  }
}

function getNum(value) {
  if (value === "JACK") {
    return 11
  } else if (value === "QUEEN") {
    return 12
  } else if (value === "KING") {
    return 13
  } else if (value === "ACE") {
    return 14
  } else {
    return Number(value)
  }
}