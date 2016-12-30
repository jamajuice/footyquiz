(function(){
	angular
		.module("footyFacts")
		.factory("quizMetrics", QuizMetrics);

		function QuizMetrics(){
			var quizObj = {
				quizActive: false
			};
		}

})();
