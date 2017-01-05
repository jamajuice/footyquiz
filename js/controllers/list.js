/*
 * IIFE to keep code clean and safe
 */
(function(){
	
	angular
	   .module("footyFacts")
	   .controller("listCtrl", ListController);

       ListController.$inject = ['quizMetrics', 'DataService'];

	   function ListController(quizMetrics, DataService){
	   		var vm = this;

            vm.quizMetrics = quizMetrics;
	   		vm.data = DataService.turtlesData;
	   		vm.activeTurtle = {};
	   		vm.changeActiveTurtle = changeActiveTurtle;
	   		vm.search = "";
	   		vm.activateQuiz = activateQuiz;

	   		function changeActiveTurtle(index){
	   			vm.activeTurtle = index;
	   		}

	   		function activateQuiz(){
	   			quizMetrics.changeState("quiz", true);
	   		}

	   }

		
})();
