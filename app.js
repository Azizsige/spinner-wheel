(function () {
  let container = document.querySelector(".container");
  let display = document.querySelector(".display");
  let btn = document.getElementById("spin");

  let deg = 0;
  let zoneSize = 45;

  const dataZones = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
  };

  function handleWin(acutalDeg) {
    let winner = Math.ceil(acutalDeg / zoneSize);
    display.innerHTML = dataZones[winner];
    console.log(winner);
  }

  btn.addEventListener("click", function () {
    display.innerHTML = "-";
    deg = Math.floor(3000 + Math.random() * 3000);
    // Set the transition on the wheel
    container.style.transition = "all 8s ease-out";
    // let numberDeg = deg % 360;
    container.style.transform = `rotate(${deg}deg)`;
    // number += Math.floor(5000 + Math.random() * 5000);
  });

  container.addEventListener("transitionend", function () {
    const actualNumber = deg % 360;
    container.style.transition = "none";
    container.style.transform = `rotate(${actualNumber}deg)`;
    handleWin(actualNumber);
    console.log(actualNumber);
  });
})();
