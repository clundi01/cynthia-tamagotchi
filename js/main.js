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

  function Reset() {
  
    if (Math.random() > 0.4) {
      hunger = hunger - 10;
      deathCheck();
        $("#food").html(hunger);
    }
      
    if (Math.random() > 0.3) {
      thirst = thirst - 15;
      deathCheck();
      $("#sleep").html(fatigue);
    }
      
      if (Math.random() > 0.5) {
        fatigue = fatigue + 10;
        deathCheck();
        $("#play").html(bordem);
      }
      
    } 