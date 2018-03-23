var questions = [{
    question: "What is Homer Simpson e-mail?",
    choices: ["Homer-Simpson@yahoo.com   ", "ChunkyLover53@aol.com   ", "Duff-man@gmai.com   ", "SimpsonHomer@hotmail.com   "],
    correctAnswer: "ChunkyLover53@aol.com",
}, {
    question: "One of Cletus' kids name is?",
    choices: ["Cocaine   ", "Marijuana   ", "Crystal Meth   ", "Heroin   "],
    correctAnswer: "Crystal Meth",

}, {
    question: "Bart first words were",
    choices: ["Ay Caramba   ", "Mon   ", "Dad   ", "Jesus   ",],
    correctAnswer: "Ay Caramba",
}, {
    question: "Homer middle name is?",
    choices: ["Jay   ", "John   ", "James   ", "Joan   "],
    correctAnswer: "Jay",
}, {
    question: "Bart's hair always consist of ____ points?",
    choices: ["7   ", "8   ", "10   ", "9   "],
    correctAnswer: "9",
}, {
    question: "Where Mr Burns lives?",
    choices: ["New York   ", "New Jersey   ", "Wisconsin   ", "Main   "],
    correctAnswer: "New Jersey",
}, {
    question: "Where does The Simpsons air?",
    choices: ["NBC   ", "CBS   ", "FOX network   ", "ABC   "],
    correctAnswer: "FOX network",
}, {
    question: "Why Groundkeeper Willie's father was hanged?",
    choices: ["For steling pigs   ", "For mudered his wife   ", "For Killing a cop   ", "For killing the president   "],
    correctAnswer: "For steling pigs",
}, {
    question: "Mayor Quimby is based on?",
    choices: ["John F. Kennedy   ", "Bill Clinton   ", "Ronald Reagan   ", "Ricard Nixon   "],
    correctAnswer: "John F. Kennedy",
}, {
    question: "Moe's favorite movie is?",
    choices: ["Star Wars   ", "Back to the future   ", "The Godfather   ", "Citizen Kane   "],
    correctAnswer: "The Godfather",
}];


 

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;



$("#timerStarts").hide();
$(".submitAnswer").hide();
$(".gameReset").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();

function checkAnswer () { 
	for (var i = 0; i < questions.length; i++) {
		var userChoice = $("input[name = 'question-" + i +"']:checked");
		if (userChoice.val() == questions[i].correctAnswer) {
			correctAnswers++; 

			} else {
				incorrectAnswers++;
				
		}
	}
	$("#correctAnswers").append(" " + correctAnswers);
	$("#incorrectAnswers").append(" " + incorrectAnswers); 
};


function timer() {
	var seconds = 30;
	counter = setInterval (function() {
	$("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');
		if (seconds === -1) {
			$("#timerStarts").html("<h2> Out of Time! </h2>");
			clearInterval(counter);
			function delayScore(){
				$("#showQuestions").hide();
				$("#timerStarts").hide();
				$(".submitAnswer").hide();
				checkAnswer();
				$("#correctAnswers").show();
				$("#incorrectAnswers").show();
			}
			setTimeout(delayScore, 1000);
		}
	}, 1000);
	
};

$(".gameStart").on("click", function() {
	$(".gameStart").hide();
	displayCurrentQuestion();
	$("#timerStarts").show();
	timer();


});

function displayCurrentQuestion() {
	$(".submitAnswer").show();
	for (var i = 0; i < questions.length; i++) {
		$("#showQuestions").append("<h3>" + questions[i].question + "</h3");
		for (var j = 0; j < questions[i].choices.length; j++) {
			$("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );

		}
	}
	$(".submitAnswer").on("click", function() {
		$("#showQuestions").hide();
		$("#timerStarts").hide();
		$(".submitAnswer").hide();
		checkAnswer();
		clearInterval(counter);
		$("#correctAnswers").show();
		$("#incorrectAnswers").show();

	});
};



















