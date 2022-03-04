// //setInterval(function(){
//   console.log(count++);
// }, 1000);

let count = 0
letmyCounter = null;

// Call the provided function every 1000 milliseconds
// Increase the count and then log it out every 1 second
// let intervalFunc = setInterval(function(){
//   count++;
//   console.log(count);
// }, 1000);

// clearInterval(intervalFunc);

// identify the elements in the DOM with variables in our JS
const feedEl = document.getElementById("btn-feed");
const sleepEl = document.getElementById("btn-sleep");
const playEl = document.getElementById("btn-play");
const resetEl = document.getElementById("btn-reset");

const hungry = document.getElementById("feed")
const Rest = document.getElementById("sleep")
const Bone = document.getElementById("play")

feedEl.addEventListener('click', feedClick);
sleepEl.addEventListener('click', sleepClick);
playEl.addEventListener('click', playClick);
resetEl.addEventListener('click', resetClick);

// function handleSleepClick() {
//   console.log("sleep button clicked!");
// }

function feedClick() {
  myCounter = setInterval(function(){
    count++;
    hungry.innerText = "Hungry: " + count;
  }, 1000);
};

function resetClick() {
  clearInterval(myCounter);
};

function sleepClick() {
  myCounter = setInterval(function(){
    count++;
    Rest.innerText = "rest: " + count;
  }, 1000);
};

function playClick() {
  myCounter = setInterval(function(){
    count++;
    Bone.innerText = "bone: " + count;
  }, 1000);
};



// let Hunger = 100;
// let Fatigue = 100;
// let Boredom = 0;

// function newGame() {
// Hunger = 100;
// Fatigue = 100;
// Bordem = 0;
// }

// function deathCheck() {
//   if (Hunger > 100) {
//     alert("Your pet has died of hunger!");
//     newGame();
//   }
  
//   if (Fatigue < 0) {
//     alert("Your pet has died of fatigue!");
//     newGame();
//   }
  
//   if (Boredom < 0) {
//     alert("Your pet has died of boredem!");
//     newGame();
//   }
//   }

//   function Reset() {
  
//     if (Math.random() > 0.4) {
//       Hunger = Hunger - 10;
//       deathCheck();
//         $("#Food").html(hunger);
//     }
      
//     if (Math.random() > 0.3) {
//       Fatigue = Fatigue - 15;
//       deathCheck();
//       $("#Sleep").html(fatigue);
//     }
      
//       if (Math.random() > 0.5) {
//         Boredom = Boredom + 10;
//         deathCheck();
//         $("#Play").html(Boredom);
//       }
      
//     } 

//     function feed() {
//       Hunger = Hunger + 50;
//       $("#food").html(Hunger);
//       Reset();
//     }
    
//     function Sleep() {
//      Fatigue = Fatigue + 40;
//      $("#sleep").html(Fatigue);
//       Reset();
//     }
    
//     function Play() {
//       Boredom = Boredom - 30;
//       $("#play").html(Boredom);
//       Reset();
//     }