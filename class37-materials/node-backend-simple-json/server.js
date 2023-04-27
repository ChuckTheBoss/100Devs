const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page === '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page === '/api') {
    if ('choice' in params) {
      function machineRandChoice() {
        let num = Math.floor(Math.random() * 3);
        console.log(num);
        if (num < 1) {
          return 'rock'
        } else if (num < 2) {
          return 'paper'
        } else if (num < 3) {
          return 'scissors'
        }
      }
      function results(userChoice, machineChoice) {
        console.log(userChoice, machineChoice)
        if (userChoice === 'rock' && machineChoice === 'rock'
          || userChoice === 'paper' && machineChoice === 'paper'
          || userChoice === 'scissors' && machineChoice === 'scissors') {
          return "It's a tie!"
        } else if (userChoice === 'rock' && machineChoice === 'paper'
          || userChoice === 'paper' && machineChoice === 'scissors'
          || userChoice === 'scissors' && machineChoice === 'rock') {
          return "Machine wins!"
        } else if (userChoice === 'scissors' && machineChoice === 'paper'
          || userChoice === 'rock' && machineChoice === 'scissors'
          || userChoice === 'paper' && machineChoice === 'rock') {
          return "Player wins!"
        }
      }
      let userChoice = params["choice"];
      let machineChoice = machineRandChoice();
      let result = results(userChoice, machineChoice)

      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        userChoice: userChoice,
        machineChoice: machineChoice,
        result: result
      }
      res.end(JSON.stringify(objToJson));
    }//choice == scissors
  }//choice if
  //else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('error.html', function (err, data) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      console.log(err);
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
