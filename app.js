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
  console.log(winningSymbolNr);
  display.innerHTML = symbolSegments[winningSymbolNr];
};

startButton.addEventListener("click", () => {
  display.innerHTML = "-";
  startButton.style.pointerEvents = "none";

  // ubah angka 6 sesuai value symbolSegments
  deg =
    Math.floor((5000 + Math.random() * 5000) / 360) * 360 + 7 * zoneSize - 15;

  wheel.style.transition = "all 10s ease-out";
  wheel.style.transform = `rotate(${deg}deg)`;
  wheel.classList.add("blur");
});

wheel.addEventListener("transitionend", () => {
  wheel.classList.remove("blur");
  startButton.style.pointerEvents = "auto";
  wheel.style.transition = "none";
  const actualDeg = deg % 360;
  wheel.style.transform = `rotate(${actualDeg}deg)`;
  handleWin(actualDeg);
});
