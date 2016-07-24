$(document).ready(function () {

    var stringInputPali, stringPally, isPally = null;

    /*Submit Button Click*/
    $("#divpali").on("click", "#submitButtonPali", function () {
        stringInputPali = $("#textPali").val().toUpperCase().replace(/[^A-Z0-9]/g, '');
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
    function displayPaliOutput() {
        if (isPally) {
            $("#verdictPali").empty();
            $("#verdictPali").append("This is a Palindrome!");
        }
        if (isPally == false) {
            $("#verdictPali").empty();
            $("#verdictPali").append("This is NOT a Palindrome!");
        }
    }

});

