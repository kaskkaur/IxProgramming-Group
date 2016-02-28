var stateController, model;


$(function() {
	//We instantiate our model
	
	var model = new DinnerModel();

	//var dishView = new DishView($("#DishViewContainer"), model);

	// var dishesView = new DishView($("#DishViewContainer"), model);

	stateController = new StateController(model);

	


	//And create the needed controllers and views
	
	
	//var exampleView = new ExampleView($("#exampleView"), model);
	//$("StartButton").onclick {

	// var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"), model);
	// var dishSelectorView = new DishSelectorView($("#dishSelectorView"), model);
	
	// var sideBarView = new SideBarView($("#SideBar"), model);
	// var sideBarController = new SideBarController(sideBarView, model);

	// var dinnerOverview = new DinnerOverview($("#dinnerOverview"), model);

	
	// var dishViewController = new DishViewController(dishView, model);



});


//fade panels
$( document ).ready(function() {
  $( ".anim" ).fadeIn( "slow" );
});






