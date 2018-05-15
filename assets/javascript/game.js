var goalNumber;
var numberOne;
var numberTwo;
var numberThree;
var numberFour;
var sum = 0;
var wins = 0;
var losses = 0;


$(document).ready(function() {    
    init();
});

$("#one").click(function() {
    sum += numberOne;
    $("#sum").text(sum);
    if (sum== goalNumber) {
        $("#status").text("You won!")
        wins++;
        reset()
    };
    if (sum > goalNumber) {
        losses++;
        reset()
        $("#status").text("You Lost!")
    }    
});

$("#two").click(function() {
    sum += numberTwo;
    $("#sum").text(sum);
    if (sum== goalNumber) {
        $("#status").text("You won!")
        wins++;
        reset()}
    if (sum > goalNumber) {
        losses++;
        reset()
        $("#status").text("You Lost!")
    }    
});

$("#three").click(function() {
    sum += numberThree;
    $("#sum").text(sum);
    if (sum== goalNumber) {
        $("#status").text("You won!")
        wins++;
        reset()
    };
    if (sum > goalNumber) {
        losses++;
        reset()
        $("#status").text("You Lost!")
    }
});

$("#four").click(function() {
    sum += numberFour;
    $("#sum").text(sum);
    if (sum== goalNumber) {
        $("#status").text("You won!")
        wins++;
        reset()
    };
    if (sum > goalNumber) {
       losses++;
       reset()
       $("#status").text("You Lost!")
    }
});



function reset() {
    init();
    sum=0;
    $("#sum").text(sum);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

function init() {
    goalNumber= Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text(goalNumber);
    numberOne= randomVal();
    numberTwo= randomVal();
    numberThree= randomVal();
    numberFour= randomVal();
    console.log(numberOne)
    console.log(numberTwo)
    console.log(numberThree)
    console.log(numberFour)
    }

    function randomVal () {
        return Math.floor(Math.random() * 11) + 1;
    }
     


 
 




