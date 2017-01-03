(function(){
	angular
		.module("footyFacts")
		.controller("quizCtrl", QuizController);

		QuizController.$inject = ['quizMetrics'];

		function QuizController(quizMetrics){
			var vm = this;
			
			vm.quizMetrics = quizMetrics;
		}

})();
