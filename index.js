
rollDice();

function rollDice() {    
    // First Dice

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomImgSrc1 = "images/" + randomDiceImage1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImgSrc1);   


     // Second Dice

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomImgSrc2 = "images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImgSrc2);


    // Player 1 Wins

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML =  "😎 Player 1 wins! 🥉";
        document.querySelector("h1").style.color = "#fefae0";
        document.body.style.backgroundColor = "#14213d";
        document.querySelectorAll("p")[0].style.color = "#fefae0";
        document.querySelectorAll("p")[0].style.textShadow =  "0 0 30px #fefae0";

    // Reset styles for the other paragraph
        document.querySelectorAll("p")[1].style.color = "";
        document.querySelectorAll("p")[1].style.textShadow = "";
                
    }

    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "😎 Player 2 wins! 🥉";
        document.querySelector("h1").style.color = "#EAE509";
        document.body.style.backgroundColor = "#C84C05";
        document.querySelectorAll("p")[1].style.color = "#EAE509";
        document.querySelectorAll("p")[1].style.textShadow = "0 0 30px #EAE509";

        // Reset styles for the other paragraph
        document.querySelectorAll("p")[0].style.color = "";
        document.querySelectorAll("p")[0].style.textShadow = "";
    }

    else {
        document.querySelector("h1").innerHTML = "DRAW! 🤝";
        document.querySelector("h1").style.color = "#FF6500";
        document.body.style.backgroundColor = "#FFF5D7";
   
        // Reset styles for both paragraphs in case of a draw
        document.body.style.backgroundColor = "#393E46";
        document.querySelectorAll("p")[0].style.color = "";
        document.querySelectorAll("p")[0].style.textShadow = '';
        document.querySelectorAll("p")[1].style.color = "";
        document.querySelectorAll("p")[1].style.textShadow = '';
    }

document.getElementById("roll").onclick = function(){
        rollDice()
           };

}  






