let feed = 100;
let sleep = 100;
let play = 0;

function newGame() {
feed = 100;
sleep = 100;
play = 0;
}

function deathCheck() {
  if (feed > 100) {
    alert("Your pet has died of hunger!");
    newGame();
  }
  
  if (sleep < 0) {
    alert("Your pet has died of fatigue!");
    newGame();
  }
  
  if (play < 0) {
    alert("Your pet has died of bordem!");
    newGame();
  }
  }
  