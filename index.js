
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //Name of image picture dice1.png-dice6.png
var randomImageSorce = "images/" + randomDiceImage; // images/dice1.png-image/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSorce);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSorce2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSorce2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Play 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
}