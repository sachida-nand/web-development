// first dice

var randomNumber1 = Math.floor((Math.random() * 6 )+ 1); //random number
var randomDiceImage = "images/dice" + randomNumber1 + ".png";  //secting folder
var image1 = document.querySelectorAll("img")[0]; //that select the index 0 or first dice.
image1.setAttribute("src", randomDiceImage); //set the random image source in the dice

//second dice

var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); //second methode

//winner decision
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "⛳Player 1 won!";
}
else if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 won!⛳";
}

// reload page
function reload(){
  location.reload();
}
