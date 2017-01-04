(function(){
	angular
		.module("footyFacts")
		.controller("quizCtrl", QuizController);

		QuizController.$inject = ['quizMetrics', 'DataService'];

		function QuizController(quizMetrics, DataService){
			var vm = this;
			
			vm.quizMetrics = quizMetrics;
			vm.dataService = DataService;
			vm.activeQuestion = 0;
			vm.setActiveQuestion = setActiveQuestion;
			vm.questionAnswered = questionAnswered;
	
			var numQsAnswered = 0;

			function setActiveQuestion(){
				var breakOut = false;
				var quizLength = DataService.quizQuestions.length - 1; 

				while(!breakOut){
					vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

					if(DataService.quizQuestions[vm.activeQuestion].selected === null){
						breakOut = true;
					}
				}
			}

			function questionAnswered(){

				var quizLength = DataService.quizQuestions.quizLength;

				if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
					numQsAnswered++;
					if(numQsAnswered >= quizLength){
						//finalize quiz

					}
				}

				vm.setActiveQuestion();
			}
		}

})();
