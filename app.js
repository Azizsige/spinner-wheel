const wheel = document.querySelector(".wheel");
const startButton = document.querySelector(".button");
const display = document.querySelector(".display");

// speed spin
let spinSpeed = 8000;

// start of setting deg
// ubah deg start 1000, 2500, 4500, 6500 . . . dst untuk setting posisi spin berhenti
let deg = 2500;
// end of setting deg

let zoneSize = 30;

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
  display.innerHTML = "-";
  startButton.style.pointerEvents = "none";

  wheel.style.transition = "all 10s ease-out";
  wheel.style.transform = `rotate(${spinSpeed}deg)`;
  wheel.classList.add("blur");
});

wheel.addEventListener("transitionend", () => {
  wheel.classList.remove("blur");
  startButton.style.pointerEvents = "auto";
  wheel.style.transition = "none";

  // start setting manual stop spinner
  const actualDeg = deg / 60;
  // end of setting manual stop spinner

  wheel.style.transform = `rotate(${actualDeg}deg)`;
  handleWin(actualDeg);
});
