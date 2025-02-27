let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let number1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", number1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let number2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", number2);

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Winner is Player 1";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Winner is Player 2";
} else {
    document.querySelector(".container h1").innerHTML = "Match Drawn";
}


