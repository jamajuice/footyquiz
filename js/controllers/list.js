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
	   		vm.data = DataService.footyData;
	   		vm.activeFooty = {};
	   		vm.changeActiveFooty = changeActiveFooty;
	   		vm.search = "";
	   		vm.activateQuiz = activateQuiz;

	   		function changeActiveFooty(index){
	   			vm.activeFooty = index;
	   		}

	   		function activateQuiz(){
	   			quizMetrics.changeState("quiz", true);
	   		}

	   }

		
})();
