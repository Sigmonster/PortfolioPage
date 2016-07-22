$(document).ready(function () {

    var stringInputPali, stringPally, isPally = null;

    /*Submit Button Click*/
    $("#divpali").on("click", "#submitButtonPali", function () {
        stringInputPali = $("#textPali").val().toUpperCase();
        getPalindrome();
        checkPaliResults();
        displayPaliOutput();
    });
    /*My Functions*/
    function getPalindrome() {
        stringPally = stringInputPali.split("").reverse().join("");
    }
    function checkPaliResults() {
        if (stringPally === stringInputPali)
            isPally = true;
        else
            isPally = false;
    }
    function displayPaliOutput() { //displays array data in quick & dirty horizontal list
        if (isPally) {
            $("#verdictPali").empty();
            $("#verdictPali").append("Woah! This is a Palindrome!");
        }
        if (isPally == false) {
            $("#verdictPali").empty();
            $("#verdictPali").append("Sorry Dude! This is NOT a Palindrome!");
        }
    }

});

