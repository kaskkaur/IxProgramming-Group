$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	
	//var DishesView = new DishesView($("#DishesView"), model);
	//var exampleView = new ExampleView($("#exampleView"), model);
	//$("StartButton").onclick {

	//var dishSelectorView = new DishSelectorView($("#dishSelectorView"), model);

	var menuListView = new MenuListView($("#menuListView"), model);
	//}

	
	

	


});


//fade panels
$( document ).ready(function() {
  $( ".anim" ).fadeIn( "slow" );
});






