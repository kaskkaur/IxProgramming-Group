$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	
	//var DishesView = new DishesView($("#DishesView"), model);
	//var exampleView = new ExampleView($("#exampleView"), model);
	//$("StartButton").onclick {

	var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"), model);
	var dishSelectorView = new DishSelectorView($("#dishSelectorView"), model);
	
	var sideBarView = new SideBarView($("#SideBar"), model);
	var sideBarController = new SideBarController(sideBarView, model);

	var dinnerOverview = new DinnerOverview($("#dinnerOverview"), model);

	var dishView = new DishView($("#dishView"), model);


	


});


//fade panels
$( document ).ready(function() {
  $( ".anim" ).fadeIn( "slow" );
});






