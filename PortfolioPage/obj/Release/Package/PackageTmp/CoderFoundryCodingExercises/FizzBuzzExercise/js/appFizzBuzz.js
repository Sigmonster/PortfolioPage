$(document).ready(function () {

    var numbersFizzBuzz = [], factor1FizzBuzz = null, factor2FizzBuzz = null;
    /*Submit Button Click*/
    $("div").on("click", "#submitButtonFizzBuzz", function () {
        factor1FizzBuzz = $("#inputNumber1FizzBuzz").val();
        factor2FizzBuzz = $("#inputNumber2FizzBuzz").val();
        getFizzBuzzCalculation();
        displayFizzBuzzOutput();
    });
    /*My Functions*/
    function getFizzBuzzCalculation() {
        for (var i = 0; i < 100; i++) {
            numbersFizzBuzz[i] = i + 1;
            if (0 == (numbersFizzBuzz[i] % factor1FizzBuzz)) {
                if (0 == (numbersFizzBuzz[i] % factor2FizzBuzz)) {
                    numbersFizzBuzz[i] = "FizzBuzz";
                }
                else {
                    numbersFizzBuzz[i] = "Fizz";
                }
            }
            else if (0 == numbersFizzBuzz[i] % factor2FizzBuzz) {
                numbersFizzBuzz[i] = "Buzz";
            }
        }
    }
    function displayFizzBuzzOutput() { //displays array data in quick & dirty horizontal list
        for (var i = 0; i < 100; i++) {
            $("#fizzBuzzOutput").append(numbersFizzBuzz[i] + "<br/>");
        }
    }
});



