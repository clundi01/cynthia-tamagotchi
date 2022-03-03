// let intervalFunc = setInterval(function(){
//     counting++;
//     console.log(counting);
//      }, 1000);

const dogOffEl = document.getElementById("btn-Dog off");
const countEl = document.getElementById("counting");

let count = 0;
let myCount = null;
// console.log("stop");
function dogOff() {
    myCount = setInterval(function(){
      count++;
      countEl.innerText = "Count: " + count;
    }, 10000);
  };

dogOffEl.addEventListener('click', dogOff);






// setInterval(myTimer, 1000);

// function myTimer() {
//   const myCount = new Count();
// document.getElementById("counting").innerHTML = count.toLocaleTimeString();
// }






// //console.log("Is this connected");

// const myButton = document.getElementById ("my-button");
// //console.log(myButton);

// const myCount =document.getElementById("my-count")

// document.getElementById("my-count");
// //console.log(myCount);

// //need an Event listener

// const addOne = () => {
//     //console.log("addOne function invoked")
//     myCount
// };


// myButton.addEventListener('click', addOne);
