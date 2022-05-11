// generate random number between 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//concantenate to generate a png file name between 1 to 6
var randomDiceImage = "dice"+randomNumber1+".png";

//concantenate to generate source path
var randomImageSource = "images/"+ randomDiceImage;

//changing source of images to source path generated above
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomImageSource);

//same as above for second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If cases to change title based on win cases
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "It's a tie!";
}
