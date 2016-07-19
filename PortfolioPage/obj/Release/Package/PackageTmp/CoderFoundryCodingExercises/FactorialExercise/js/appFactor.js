$(document).ready(function () {

    var NumberFactorial = { inputFactNum: null, factorial: 1 };
    /*Submit Button Click*/
    $("#divFactorial").on("click", "#submitButtonFactorial", function () {
        NumberFactorial.inputFactNum = $("#inputNumberFactorial").val();
        /*debug*/console.log(NumberFactorial.inputFactNum);
        getFactorialCalculation();
        displayOutput();
    });
    /*My Functions*/
    function getFactorialCalculation() {
        NumberFactorial.factorial = NumberFactorial.inputFactNum;//set multiplier
        while (NumberFactorial.inputFactNum--, NumberFactorial.inputFactNum >= 1) {
            NumberFactorial.factorial = NumberFactorial.factorial * NumberFactorial.inputFactNum;
        }
    }
    function displayOutput() {
        $("#factorialspan").empty();
        $("#factorialspan").append(NumberFactorial.factorial);
        /*debug*/console.log("factorial=" + NumberFactorial.factorial);
    }

});