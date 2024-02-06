//All the things that tech support scammers say.
var techScam = {
  0 :"Bad IP's",
  1 :"Dewice",
  2 :"Dextop",
  3 :"Dir /s",
  4 :"Do one thing…",
  5 :"Drawings",
  6 :"Each and Everything",
  7 :"Errors and Warnings",
  8 :"Event Viewer",
  9 :"Extreme bottom left",
  10 :"Fastsupport.com",
  11 :"Firewall",
  12 :"Four flag",
  13 :"Hackers",
  14 :"Heavy Breathing",
  15 :"Insults",
  16 :"Level 5 Technician",
  17 :"Let me just<br>going to connect",
  18 :"License Expired",
  19 :"Look bottom left on keyboard",
  20 :"Microsoft Certified",
  21 :"McAfee/Norton",
  22 :"Network security",
  23 :"One time charge",
  24 :"Runs netstat",
  25 :"Runs tree command",
  26 :"Scammer Knows..",
  27 :"Secure Server",
  28 :"Sir/Ma’am",
  29 :"Stopped services",
  30 :"Support.me",
  31 :"Syskey",
  32 :"Task Manager Performance",
  33 :"Windows Key + R",
  34 :"Wirus"
};

var gordonRamsay = {
  0 :"My food is good",
  1 :"It\'s fucking RAW",
  2 :"It\'s disgusting",
  3 :"Our last chance",
  4 :"It\'s bland",
  5 :"I\'m not serving this food",
  6 :"It tastes like ____",
  7 :"You\'re a fucking ____",
  8 :"It\'s fucking embarrasing",
  9 :"Dreadful"
};

//The object for all the bingo buttons
var bingoBtn = {};
var quotes = new Array();
var seed = "";

//Sets up the bingo
function bingo(bingoQuotes, row, col) {
  document.getElementById("bingoBoard").innerHTML = "Setting up.."

  //Variable for the table, adding in all the buttons and parts that are required in the table
  this.gameboard = '<table class="background">';

  //checks for if row and col hasn't been set and automatically sets it to 4. also checks for too low numbers.
  if (row == undefined || row <= 0) row = 4;
  if (col == undefined || col <= 0) col = 4;
  this.row = row;
  this.col = col;

  //Variable that keeps track of what quotes has already been used, and a variable that adds quotes
  this.quotes = [];
  this.getQuote = 0;

  //console.log("Loop to add all rows to the table");
  for (var i = 1; i <= row; i++ ) {
    gameboard += '<tr id="tr' + i + '">';
    //console.log("Loop to add all cells and quotes");
    for (var j = 1; j <= col; j++) {
      //console.log("Add the " + i + "" + j + " cell to the gameboard");
      gameboard += '<td id="td' + i + "" + j + '">';

      //console.log("Supposed to make sure it gets a new quote every time so there are no duplicates");
      do {
        getQuote = Math.floor(Math.random() * Object.keys(bingoQuotes).length);
      } while (!(this.quotes.indexOf(getQuote) === -1));
      this.quotes.push(getQuote);

      //console.log("Add the button and quote to gameboard");
      gameboard += "<button class=\"btn\" id=\"btn" + i + "" + j + "\" onclick=\"btn\(" +  i + "" + j + "\)\">" + bingoQuotes[getQuote] + "</button></td>";
      bingoBtn[i + '' + j] = false;

    }
    //Finishes the row
    gameboard += '</tr>'
  }

  //Ends table and puts it into document
  gameboard += '</table>';
  document.getElementById("bingoBoard").innerHTML = gameboard;
  gameboard = '';
  console.log(bingoBtn);
  return quotes = this.quotes;
}

//Sets the True/False state of the button pressed by using btnLoc (Button Location) in a 4x4 grid
function btn(btnLoc) {
  //Sets to false
  if (bingoBtn[btnLoc] === true) {
    console.log("Setting " + btnLoc + " to false.");
    document.getElementById("btn" + btnLoc).style.backgroundColor = "#DD0000";
     bingoBtn[btnLoc] = false;
  }

  //Sets to true
  else if (bingoBtn[btnLoc] === false) {
    console.log("Setting " + btnLoc + " to true.");
    document.getElementById("btn" + btnLoc).style.backgroundColor = "#FFD700";
    bingoBtn[btnLoc] = true;
  }
  if(isWin()) {
    //Put what to display when you win here
    document.getElementById("bingoBoard").innerHTML = "<img src=\"https://i.imgur.com/IGgdSV8.jpg\" class=\"winner\">";
  }
}

//function to check if you win or not
function isWin() {
  //Checks if a single row is complete depending on how long the rows are
  for (var i = 1; i <= row; i++) {
    console.log("Row:" +i);
    for (var j = 1; j <= col; j++) {
      console.log("Col:" + j);
      if (bingoBtn[i + "" + j] === true && j != col) {
        console.log("Row: " + i + " Col: " + j + " OK, Continue");
        continue;
      }
      else if (bingoBtn[i + "" + j] === true && j == col) {
        console.log("Row " + i + " is completely true.");
        return true;
      }
      else {
        console.log("Something is false.");
        break;
      }
    }
  }

  //Checks if a single column is complete depending on how long the columns are
  for (var i = 1; i <= col; i++) {
    console.log("Col:" + i);
    for (var j = 1; j <= row; j++) {
      console.log("Row:" + j);
      if (bingoBtn[j + "" + i] === true && j != row) {
        console.log("Col: " + i + " Row: " + j + " OK, Continue");
        continue;
      }
      else if (bingoBtn[j + "" + i] === true && j == row) {
        console.log("Col " + i + " is completely true.");
        return true;
      }
      else {
        console.log("Something is false.");
        break;
      }
    }
  }

  return false;
}
