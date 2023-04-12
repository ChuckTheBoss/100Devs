let deck = {
  deckId: '',
  drawnCard: '',
  pile: '',
  players: '',
  drawOne() {
    const drawURL = `https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`

    fetch(drawURL)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        this.drawnCard = data.cards[0].code;
        console.log(this.drawnCard)
      })
      .catch(err => {
        console.log(`error ${err}`)
      });
  },
  addToPile(playerNum, pile) {
    const addURL = `https://deckofcardsapi.com/api/deck/${this.deckId}/pile/player${playerNum}/add/?cards=${this.pile}`
    fetch(addURL)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(`error ${err}`)
      });
  },
  splitDeck(i) {
    const cardsPerPlayer = Math.ceil(52 / this.players);
    const drawURL = `https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=${cardsPerPlayer}`

    let drawnCard = [];
    fetch(drawURL)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        data.cards.forEach(card => {
          drawnCard.push(card.code);
        });
        this.pile = drawnCard.join(",");
        console.log(this.pile)
        addToPile(i, this.pile)
      })
      .catch(err => {
        console.log(`error ${err}`)
      });
  }

}

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    deck.deckId = data.deck_id
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

//On click, will draw two cards 
document.querySelector('button').addEventListener('click', deal)

let drawnCard;
function drawOne() {
  const drawURL = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`

  fetch(drawURL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      drawnCard = data.cards[0].code;
      console.log(drawnCard)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function addToPile(playerNum, pile) {
  const addURL = `https://deckofcardsapi.com/api/deck/${deckId}/pile/player${playerNum}/add/?cards=${pile}`
  fetch(addURL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
let pile;
let players = 3;
function splitDeck(i) {
  const cardsPerPlayer = Math.ceil(52 / players);
  const drawURL = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardsPerPlayer}`

  let drawnCard = [];
  fetch(drawURL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      data.cards.forEach(card => {
        drawnCard.push(card.code);
      });
      pile = drawnCard.join(",");
      console.log(pile)
      addToPile(i, pile)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
count = players;
function deal() {
  splitDeck(count);
  count--
}


// function getFetch() {

//   const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`

//   fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//       // sets value of cards
//       let val = Number(cardValue(data.cards[0].value))
//       // displays the card images. 
//       document.querySelector('#player1').src = data.cards[0].image

//       // declares a winner
//       // if (val1 > val2) {
//       //   document.querySelector('h3').innerText = 'Player 1 WON!'
//       // } else if (val1 < val2) {
//       //   document.querySelector('h3').innerText = 'Player 2 WON!'
//       // } else {
//       //   document.querySelector('h3').innerText = 'WAR!'
//       // }
//     })
//     .catch(err => {
//       console.log(`error ${err}`)
//     });
// }

// creates a numerical value for face cards, making it easier to compare. 
function cardValue(val) {
  if (val === "ACE") {
    return 14
  } else if (val === "KING") {
    return 13
  } else if (val === "QUEEN") {
    return 12
  } else if (val === "JACK") {
    return 11
  } else {
    return val
  }
}