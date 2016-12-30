/*
 * IIFE to keep code clean and safe
 */
(function(){
	
	angular
	   .module("footyFacts")
	   .controller("listCtrl", ListController);

	   function ListController(){
	   		this.dummyData = "hello world";
	   }
		
})();
