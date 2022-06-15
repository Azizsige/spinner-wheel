// (function () {
//   let container = document.querySelector(".container");
//   let display = document.querySelector(".display");
//   let btn = document.getElementById("spin");

//   let deg = 0;

//   const dataZones = {
//     1: "1",
//     2: "2",
//     3: "3",
//     4: "4",
//     5: "5",
//     6: "6",
//     7: "7",
//     8: "8",
//   };

//   var size = Object.keys(dataZones).length;

//   let zoneSize = 45;
//   console.log(zoneSize);

//   function handleWin(acutalDeg) {
//     let winner = Math.ceil(acutalDeg / zoneSize);
//     display.innerHTML = dataZones[winner];
//     console.log(winner);
//   }

//   btn.addEventListener("click", function () {
//     display.innerHTML = "-";
//     deg = Math.floor(3000 + Math.random() * 3000);
//     // Set the transition on the wheel
//     container.style.transition = "all 8s ease-out";
//     // let numberDeg = deg % 360;
//     container.style.transform = `rotate(${deg}deg)`;
//     console.log(deg);
//     // number += Math.floor(5000 + Math.random() * 5000);
//   });

//   container.addEventListener("transitionend", function () {
//     // alert("Yeayy");
//     // deg = Math.floor(3000 + Math.random() * 3000);
//     const actualNumber = (deg % 360) / size;
//     container.style.transition = "none";
//     container.style.transform = `rotate(${actualNumber}deg)`;
//     handleWin(actualNumber);
//     // console.log(actualNumber);
//   });
// })();

// Immediately invoked function expression
// to not pollute the global scope
(function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");
  const display = document.querySelector(".display");

  let deg = 0;
  let zoneSize = 30; // deg

  // Counter clockwise
  const symbolSegments = {
    1: "Iphone 13 Pro",
    2: "COBA LAGI",
    3: "5.000.000",
    4: "50.000",
    5: "25.000",
    6: "FREE SPIN",
    7: "500.000",
    8: "10.000",
    9: "COBA LAGI",
    10: "1.000.000",
    11: "100.000",
    12: "5.000",
  };

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
  };

  startButton.addEventListener("click", () => {
    // Reset display
    display.innerHTML = "-";
    // Disable button during spin
    startButton.style.pointerEvents = "none";
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = "all 10s ease-out";
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add("blur");
  });

  wheel.addEventListener("transitionend", () => {
    wheel.classList.remove("blur");
    startButton.style.pointerEvents = "auto";
    wheel.style.transition = "none";
    // start setting manual stop spinner
    const actualDeg = deg / 60;
    // end of setting manual stop spinner

    // start of default spinner stop
    // const actualDeg = deg % 360;
    // end of default spinner stop
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    handleWin(actualDeg);
  });
})();
