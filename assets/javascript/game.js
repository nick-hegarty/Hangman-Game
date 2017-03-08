var computerChoice =["zues","hera","poseidon","demeter", "ares","athena","apollo","artemis","hephaestus","aphrodite","hermes", "dionysus","hades","hypnos","nike","janus","nemesis","iris","hecate","tyche","kratos"];
//user letter choice array
var userChoice =[];
var randomWord =" ";
var lettersinrandomWord= [];
var numBlanks = 0;//double check
var blanksAndSuccesses = [];
var wrongGuesses = [];
//lives left
var lives = 9;

var winCounter = 0;
var lossCounter = 0;

var randomlines = $("randomWord")

$(document).ready(function() {
   $("#restartButton").on("click", function () {
     location.reload();
 	});
});

 
function gameStart() {
	lives = 9;
	randomWord = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	lettersinrandomWord = randomWord.split("");
	blanksAndSuccesses = randomWord.split("").fill('_'); //FOR loop for black and successess
	man = document.getElementById("man");
}

for (var i=0; i< blanksAndSuccesses.length; i++) { 
   var newrandomlines = $("<div>" + blanksAndSuccesses[i] + "</div>");
    randomlines.append(newrandomlines);
}//right?

gameStart();

document.onkeyup = function(event){
	var pressedkey=event.key;
	userChoice.push(event.key);
	var check = lettersinrandomWord.indexOf(event.key);
	checkLetter(check,event.key);
	console.log(lives,blanksAndSuccesses,lettersinrandomWord,randomWord);
	gameOver(); // how to check double letters with this structure...
	//if (check > -1){


	//}
}

function checkLetter(index,key){ //add second handle to compare LETTER selection to position 
	if (index < 0){
		lives--;
		man.innerHTML = 'You have ' + lives + ' lives remaining';
	}
	else {
		blanksAndSuccesses [index]= key;
	}
	
}


man.innerHTML = 'You have ' + lives + ' lives remaining';


function gameOver(){
	if (lives === 0){
		alert ("YOU ARE NOW DWAYNE JOHNSON")
	}
}

function gameWin(){
	if (userChoice === blanksAndSuccesses && blanksAndSuccesses === lettersinrandomWord)
		alert( "you win")
}





