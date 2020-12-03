// Selectors
const cells = document.querySelectorAll("td");
const xDisplay = document.querySelector("#xnum");
const oDisplay = document.querySelector("#onum");
const message = document.querySelector("#msg");

// Global Variables
const winningLocations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

// Global Checkers
let xWins = false;
let oWins = false;

let xPts = 0;
let oPts = 0;

let xArr = [];
let oArr = [];

// Functions
function nextGame() {
  setTimeout(() => {
    cells.forEach((c) => {
      c.classList.remove("O");
      c.classList.remove("X");
      xWins = false;
      oWins = false;
    });
    message.innerHTML = "";
  }, 1000);
}

// Event Listeners
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (!cell.classList.contains("O") && !cell.classList.contains("X")) {
      cell.classList.add("X");
      // This array is fed values from cells (a node list) in order to use .every method since node lists don't work with .every
      // also set with one value as default and to false because the array gets rerendered everytime to its
      // original state
      const cellsArr = [false];

      // This function is used with .every method
      const isFull = (item) => item === true;

      const findEmptySpot = () => {
        const randomNumber = Math.floor(Math.random() * cells.length);
        if (
          !cells[randomNumber].classList.contains("O") &&
          !cells[randomNumber].classList.contains("X")
        ) {
          cells[randomNumber].classList.add("O");
        } else if (!cellsArr.every(isFull)) {
          // I put this 'array pusher' here so it will always call before the findEmptySpot() function gets ran again, letting the system
          // know that it has to stop trying to find a new position, as there are no open ones.
          cells.forEach((c, index) => {
            if (c.classList.contains("O") || c.classList.contains("X")) {
              cellsArr[index] = true;
            } else {
              cellsArr[index] = false;
            }
          });
          findEmptySpot();

          // If the board is full and there are no winners RESTART
        } else if (cellsArr.every(isFull)) {
          message.innerHTML = "It's a tie!";
          nextGame();
        }
      };
      // Just calling the function to get the ball rolling
      findEmptySpot();

      // Setting up xArr and oArr to see who wins
      cells.forEach((c, index) => {
        if (c.classList.contains("X")) {
          xArr[index] = 1;
          oArr[index] = 0;
        } else if (c.classList.contains("O")) {
          oArr[index] = 1;
          xArr[index] = 0;
        } else {
          xArr[index] = 0;
          oArr[index] = 0;
        }
      });

      // Check if Won
      winningLocations.forEach((loc) => {
        if (xArr[loc[0]] === 1 && xArr[loc[1]] === 1 && xArr[loc[2]] === 1) {
          xWins = true;
        } else if (
          oArr[loc[0]] === 1 &&
          oArr[loc[1]] === 1 &&
          oArr[loc[2]] === 1
        ) {
          oWins = true;
        }
      });

      // Win handler
      if (xWins) {
        xPts++;
        xDisplay.innerHTML = xPts;
        message.innerHTML = "X Wins!";
        nextGame();
      } else if (oWins) {
        oPts++;
        oDisplay.innerHTML = oPts;
        message.innerHTML = "O Wins!";
        nextGame();
      }
    }
  });
});
