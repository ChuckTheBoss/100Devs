//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + choice

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      document.querySelector("h2").innerText = data[0].word; //Displays the word
      //displays the phonetic pronunciation of the word
      let phonetics = data[0].phonetics.filter(obj => obj.text);
      document.querySelector("p.phonetics").innerText = phonetics[0].text;

      //displays the parts of speech and each definition associated with that part of speech.
      var count = 0;
      data[0].meanings.forEach(speech => {
        li = `<li class="speech"> ${speech.partOfSpeech} </li> `;
        document.querySelector(".partsOfSpeech").innerHTML += li;
        document.querySelector(".partsOfSpeech").innerHTML += `<ul class="definition${count}"></ul>`;
        speech.definitions.forEach(def => {
          if (def.example) {
            defli = `<li class="definition"> ${def.definition} <span>${def.example}</span></li> `
          } else {
            defli = `<li class="definition"> ${def.definition} </li> `;
          };
          document.querySelector(`.definition${count}`).innerHTML += defli;
        });
        count++;
      });
      //adds a pronunciation button
      document.querySelector("audio").src = (data[0].phonetics.filter(obj => obj.audio).find(source => source.audio.endsWith("us.mp3")).audio);
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}