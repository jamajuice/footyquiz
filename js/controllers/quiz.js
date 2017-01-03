(function(){
	angular
		.module("footyFacts")
		.controller("quizCtrl", QuizController);

		QuizController.$inject = ['quizMetrics', 'DataService'];

		function QuizController(quizMetrics, DataService){
			var vm = this;
			
			vm.quizMetrics = quizMetrics;
			vm.dataService = DataService;
		}

})();
