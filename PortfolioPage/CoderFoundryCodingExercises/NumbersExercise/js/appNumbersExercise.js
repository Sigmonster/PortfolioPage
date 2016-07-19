
$(document).ready(function() {

	var guess=[];
	var numLeast, numGreatest, numSum, numMean, numProduct, gameOver=false;

	//Buttons Actions that control the flow of events
	$("#gameform").submit(function(event){
		event.preventDefault();
		if (gameOver==true){
			/*Cant get to work, with bootstrap.*///$("#myModal").modal();
			alert("You've already played this game, click new game to play again!");
			return;
		}
		getNumbers();
		clearInputFields();
		getLeastAndGreatest();
		getSum();
		getMean();
		getProduct();
		displayOutput();
	});
	$("#gameform").on("click","#newGame",function(){
		newGame();});

	//Functions for Math & Assigning Input
	function getNumbers(){
		guess[0]=$("#userGuess1").val();
		guess[1]=$("#userGuess2").val();
		guess[2]=$("#userGuess3").val();
		guess[3]=$("#userGuess4").val();
		guess[4]=$("#userGuess5").val();}
	function getLeastAndGreatest(){
		guess=guess.sort(function(a,b){return a-b});
		numLeast=guess[0];
		numGreatest=guess[guess.length-1];}
	function getSum(){
		var sum=0;
		$.each(guess,function(){sum+=parseFloat(this) ||0;});
		numSum=sum;}
	function getMean(){ 
		numMean=numSum/guess.length;}
	function getProduct(){
		var product=1;
		for (var i=0; i<guess.length;i++){
			product *= guess[i];
		}
		numProduct=product;
	}
	//Fuctions for Displaying Output or Resetting Output for a New Game
	function displayOutput(){
		$("#number-least").append(numLeast);
		$("#number-greatest").append(numGreatest);
		$("#number-mean").append(numMean);
		$("#number-sum").append(numSum);
		$("#number-product").append(numProduct);
		gameOver=true;
	}
	function newGame(){
		gameOver=false;
		clearInputFields();
		var guess=[];
		resetOutputElements();
	}
	function clearInputFields(){
		$(".text").val("");
	}
	function resetOutputElements(){
		$("#number-least").empty();
		$("#number-least").append("Least: ");
		$("#number-greatest").empty();
		$("#number-greatest").append("Greatest: ");
		$("#number-mean").empty();
		$("#number-mean").append("Mean: ");
		$("#number-sum").empty();
		$("#number-sum").append("Sum: ");
		$("#number-product").empty();
		$("#number-product").append("Product: ");
	}
});

/*	//Just for future reference
	getSum(){
	var total=0;
		for (var i=0;i < guess.length;i++){
			total += guess[i];
		}
		console.log(total);
		numSum=total;
	}
*/
/*
	function findGreatest(){
		guess.sort(function(a,b){return b-a});
		/*debugonlyconsole.log("greatest=" + guess[0]);
		}

*/