const start = document.getElementById('start');
let num1 = 1;
let num2 = 10;

function startNewGame() {
  let result = Math.floor(Math.random() * 10) + 1;
  // console.log(result);
  let numberOfTries = 3;

  while (numberOfTries > 0) {
    let input = prompt(`Please Guess the number between 1 to 10 (Tries left: ${numberOfTries}): `);
    input = parseInt(input);

    if (input >= 1 && input <= 10) {
      if (input === result) {
        alert("You Win!");
        location.reload(); 
        return;
      } 
      else if (input > result) {
        alert("Correct answer is smaller!");
      }
      else if (input < result) {
        alert("Correct answer is greater!");
      }
    } 
    else {
      alert("Invalid input. Please enter a number between 1 and 10.");
    }

    numberOfTries--;
  }

  if (numberOfTries === 0) {
    alert("You have run out of tries. The correct answer was " + result);
    location.reload();
  }
}

start.addEventListener("click", startNewGame);
