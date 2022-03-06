// Added counter for each functions as below
let agePet = 0
let hunger = 0
let bore = 0
let sleep = 0
let count = 0

// calls each function when the page loads
window.onload = function main() {
  ageCount();
  hungerCount();
  boreCount();
  sleepCount();
}
//added each variable for the set interval function so we can stop the timer
// according to the condition we set
let ageCounter = null;
let hungerCounter = null
let boreCounter = null
let sleepCounter = null
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

// function to increment the age
function ageCount() {
    ageCounter = setInterval(function () {
        // increment the age of pet
        agePet++;
        age.innerText = "Age: " + agePet;
        if (hunger == 10 || bore == 10 || sleep == 10)
        // stop the timer if any of the above condition satsfies
            clearInterval(ageCounter);
    // time interval is set as 1 minute
    }, 60000); 
}

// function to increment the hunger
function hungerCount() {
  hungerCounter = setInterval(function () {
      hunger++;
      hungry.innerText = "Hunger: " + hunger;
      if (hunger == 10)
          // if the value of bore reaches the value 10 first then display the message 
          petAlive.innerText = "Your pet died of hunger. ";
          if (hunger == 10 || bore == 10 || sleep == 10)
          // stop the timer if any of the above condition satsfies
          clearInterval(hungerCounter);
  // time interval is set as .5 seconds
  }, 500);

}



// function feedClick() {
//   myCounter = setInterval(function(){
//     count++;
//     hungry.innerText = "Hungry: " + count;
//   }, 1000);
// };

// function resetClick() {
//   clearInterval(myCounter);
// };

// function sleepClick() {
//   myCounter = setInterval(function(){
//     count++;
//     Rest.innerText = "rest: " + count;
//   }, 1000);
// };

// function playClick() {
//   myCounter = setInterval(function(){
//     count++;
//     Bone.innerText = "bone: " + count;
//   }, 1000);
// };



// // let Hungry = 100;
// // let Rest = 100;
// // let Bone= 0;

// function newGame() {
// feed = 100;
// Sleep = 100;
// Play = 0;
// }

// function deathCheck() {
//   if (feed > 100) {
//     alert("Your pet has died of hunger!");
//     newGame();
//   }
  
//   if (Sleep < 0) {
//     alert("Your pet has died of fatigue!");
//     newGame();
//   }
  
//   if (Play < 0) {
//     alert("Your pet has died of boredem!");
//     newGame();
//   }
//   }

//   function Reset() {
  
//     if (Math.random() > 0.4) {
//       feed = feed - 10;
//       deathCheck();
//         $("#Food").html(feed);
//     }
      
//     if (Math.random() > 0.3) {
//       Sleep = Sleep - 15;
//       deathCheck();
//       $("#Sleep").html(Sleep);
//     }
      
//       if (Math.random() > 0.5) {
//         Play = Play + 10;
//         deathCheck();
//         $("#Play").html(Play);
//       }
      
//     } 

//     function feed() {
//       feed = feed + 50;
//       $("#feed").html(feed);
//       Reset();
//     }
    
//     function Sleep() {
//      Sleep = Sleep + 40;
//      $("#Sleep").html(Sleep);
//       Reset();
//     }
    
//     function Play() {
//       Play= Play- 30;
//       $("#Play").html(Play);
//       Reset();
//     }