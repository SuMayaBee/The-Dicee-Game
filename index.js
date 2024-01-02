

var randomnumber1 = Math.random()  ;
randomnumber1 = randomnumber1*6 + 1;
randomnumber1 = Math.floor(randomnumber1);

//console.log(randomnumber1);

var srcLeft = "./images/dice"+ randomnumber1+ ".png";

document.querySelector(".img1").setAttribute("src", srcLeft);

var randomnumber2 = Math.random()  ;
randomnumber2 = randomnumber2*6 + 1;
randomnumber2 = Math.floor(randomnumber2);

//console.log(randomnumber1);

var srcRight = "./images/dice"+ randomnumber2+ ".png";

document.querySelector(".img2").setAttribute("src", srcRight);

if(randomnumber1>randomnumber2) {
    document.querySelector("h1").innerHTML = "Player1 won!";
} else if (randomnumber1<randomnumber2) {
    document.querySelector("h1").innerHTML = "Player2 won!";
} else {
    document.querySelector("h1").innerHTML = "Both won!";
}