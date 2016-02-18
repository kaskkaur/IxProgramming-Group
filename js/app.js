$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	
	//var DishesView = new DishesView($("#DishesView"), model);
	//var exampleView = new ExampleView($("#exampleView"), model);
	//$("StartButton").onclick {

	var dishSelectorView = new DishSelectorView($("#dishSelectorView"), model);
	var sideBarView = new SideBarView($("#sideBarView"), model);

	//}

	
	

	
	//window.onload = model.setNumberOfGuests();


});


//fade panels
$( document ).ready(function() {
  $( ".anim" ).fadeIn( "slow" );
});






