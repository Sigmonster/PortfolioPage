$(document).ready(function () {
    /*Declared Variables*/
    var NumFact = { inputFactNum: null, factorial: 1, numberFormat: false };

    /*Submit Button Click*/
    $("#divFactorial").on("click", "#submitButtonFactorial", function () {
        NumFact.inputFactNum = $("#inputNumberFactorial").val();
        checkFactorialInputNumberFormat();
        if(NumFact.numberFormat==true){
            getFactorialCalculation();
            displayFactorialOutput();
        }
    });
    /*My Functions*/
    function checkFactorialInputNumberFormat() {
        if (NumFact.inputFactNum > -1 && NumFact.inputFactNum <= 100 && NumFact.inputFactNum % 1 == 0) {
            NumFact.numberFormat = true;
        }
        else {
            alert("Cm'on DUDE!!! Enter an Integer between 1-100!");
            NumFact.numberFormat = false;
        }
    }
    function getFactorialCalculation() {
        NumFact.factorial = NumFact.inputFactNum;//set multiplier
        while (NumFact.inputFactNum--, NumFact.inputFactNum >= 1) {
            NumFact.factorial = NumFact.factorial * NumFact.inputFactNum;
        }
    }
    function displayFactorialOutput() {
        $("#factorialspan").empty();
        $("#factorialspan").append(NumFact.factorial);
    }
});