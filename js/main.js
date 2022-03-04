let Hunger = 100;
let Fatigue = 100;
let Boredom = 0;

function newGame() {
Hunger = 100;
Fatigue = 100;
Bordem = 0;
}

function deathCheck() {
  if (Hunger > 100) {
    alert("Your pet has died of hunger!");
    newGame();
  }
  
  if (Fatigue < 0) {
    alert("Your pet has died of fatigue!");
    newGame();
  }
  
  if (Boredom < 0) {
    alert("Your pet has died of boredem!");
    newGame();
  }
  }

  function Reset() {
  
    if (Math.random() > 0.4) {
      Hunger = Hunger - 10;
      deathCheck();
        $("#Food").html(hunger);
    }
      
    if (Math.random() > 0.3) {
      Fatigue = Fatigue - 15;
      deathCheck();
      $("#Sleep").html(fatigue);
    }
      
      if (Math.random() > 0.5) {
        Boredom = Boredom + 10;
        deathCheck();
        $("#Play").html(Boredom);
      }
      
    } 

    function feed() {
      Hunger = Hunger + 50;
      $("#food").html(Hunger);
      Reset();
    }
    
    function Sleep() {
     Fatigue = Fatigue + 40;
     $("#sleep").html(Fatigue);
      Reset();
    }
    
    function Play() {
      Boredom = Boredom - 30;
      $("#play").html(Boredom);
      Reset();
    }