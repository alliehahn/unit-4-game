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
        wins++;
        reset()
    };
    if (sum > goalNumber) {
        losses++;
        reset()
    }    
});

$("#two").click(function() {
    sum += numberTwo;
    $("#sum").text(sum);
    if (sum== goalNumber) {
        wins++;
        reset()}
    if (sum > goalNumber) {
        losses++;
        reset()
    }    
});

$("#three").click(function() {
    sum += numberThree;
    $("#sum").text(sum);
    if (sum== goalNumber) {
        wins++;
        reset()
    };
    if (sum > goalNumber) {
        losses++;
        reset()
    }
});

$("#four").click(function() {
    sum += numberFour;
    $("#sum").text(sum);
    if (sum== goalNumber) {
        wins++;
        reset()
    };
    if (sum > goalNumber) {
       losses++;
       reset()
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
    goalNumber= Math.floor(Math.random() * 121) + 19;
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
        return Math.floor(Math.random() * 13) + 1;
    }
     


 
 




