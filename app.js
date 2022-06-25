const wheel = document.querySelector(".wheel");
const startButton = document.querySelector(".button");
const display = document.querySelector(".display");
let voucher = document.querySelector("#inputVoucher");
let mengerti = document.querySelector("#mengerti");
let popup = document.querySelector(".overlay2");
let textWarning = document.querySelector(".overlay2 .content");
let popupHome = document.querySelector(".overlay1");
let close = document.querySelector(".close");

let deg = 0;
let zoneSize = 30; // deg
let voucherText = "voucher";

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
  if (voucher.value == "") {
    popup.classList.add("open");
    textWarning.innerText = "Masukkan Kode Tiket Terlebih Dahulu!";
    voucher.value = "";
    return;
  }
  if (voucher.value !== voucherText) {
    popup.classList.add("open");
    textWarning.innerText = "Kode yang dimasukkan salah!";
    voucher.value = "";
    return;
  } else {
    // display.innerHTML = "-";
    startButton.style.pointerEvents = "none";

    // ubah angka 6 sesuai value symbolSegments
    deg =
      Math.floor((5000 + Math.random() * 5000) / 360) * 360 + 1 * zoneSize - 15;

    wheel.style.transition = "all 10s ease-out";
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add("blur");
    voucher.value = "";
  }
});

wheel.addEventListener("transitionend", () => {
  wheel.classList.remove("blur");
  startButton.style.pointerEvents = "auto";
  wheel.style.transition = "none";
  const actualDeg = deg % 360;
  wheel.style.transform = `rotate(${actualDeg}deg)`;
  handleWin(actualDeg);
});

close.addEventListener("click", function () {
  popup.classList.remove("open");
});

mengerti.addEventListener("click", function () {
  popupHome.classList.add("closeHome");
});
