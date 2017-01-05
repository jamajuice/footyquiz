(function(){
	angular
		.module("footyFacts")
		.controller("resultsCtrl", ResultsController);

		ResultsController.$inject = ['quizMetrics', 'DataService']

		function ResultsController(quizMetrics, DataService){
			var vm = this;

			vm.quizMetrics = quizMetrics;
			vm.dataService = DataService;
			vm.activeQuestion = 0;
			vm.getAnswerClass = getAnswerClass;

			function getAnswerClass(index){
				if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
					return "bg-success";
				}else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
					return "bg-danger";
				}
			}
		}

})();