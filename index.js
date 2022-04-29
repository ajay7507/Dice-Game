

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "Images/dice" + randomNumber1 + ".png";
 document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; 
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Winner"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML = "🚩Player 2 is Winner"
}
else if (randomNumber1 === randomNumber2){
    document.querySelector(".container h1").innerHTML = "Draw!"
}
