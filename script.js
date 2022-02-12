function diceRolling() {
  // selecting first player dice
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber1);

  document
    .getElementById("first-img")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");

  // selecting first player dice
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber2);

  document
    .getElementById("second-img")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  //   winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML =
      "First Player is gonna pay the bills!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML =
      "Second  Player is gonna pay the bills!";
  } else {
    document.querySelector("h2").innerHTML = "Both of u share the bills";
  }
}
