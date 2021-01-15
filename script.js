'use strict';

let randomNo = Math.trunc(Math.random() * 20) + 1;

const displayMsg = (message) => {
  document.querySelector(".message").textContent = message;
}
  
//By executing the button "Check" we get the value from the text field and compare it with the random number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (document.querySelector(".score").textContent > 0 && guess <= 20 && guess > 0) {
     if (guess === randomNo) {
      displayMsg("You Win!🎉");

      if (document.querySelector(".highscore").textContent <= document.querySelector(".score").textContent) {
        document.querySelector(".highscore").textContent = document.querySelector(".score").textContent;
      } else {
        document.querySelector(".highscore").textContent = document.querySelector(".highscore").textContent;
      }

      document.querySelector(".number").textContent = randomNo;
      //Change background color to green
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if (guess > randomNo) {
      displayMsg("Number is smaller 📉");
      document.querySelector(".score").textContent = document.querySelector(".score").textContent - 1;
    } else {
      displayMsg("Number is bigger 📈");
      document.querySelector(".score").textContent = document.querySelector(".score").textContent - 1;
    } 
  } else if (document.querySelector(".score").textContent > 0 && guess > 20 || guess < 1) {
    displayMsg("⛔️ Only numbers between 1 and 20");
  } else {
    displayMsg("You lose 💥 Try Again!");
  }
});

//Reset the Game to initial setting to restart it
document.querySelector(".again").addEventListener("click", function () {
  randomNo = Math.trunc(Math.random() * 20) + 1;

  //const randomNo = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  displayMsg("Start guessing ...");
  //Change to old css version after win / click on the button
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

});