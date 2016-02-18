$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	
	//var DishesView = new DishesView($("#DishesView"), model);
	//var exampleView = new ExampleView($("#exampleView"), model);
	//$("StartButton").onclick {

<<<<<<< HEAD
	var dishSelectorView = new DishSelectorView($("#dishSelectorView"), model);
	var sideBarView = new SideBarView($("#sideBarView"), model);
=======
	//var dishSelectorView = new DishSelectorView($("#dishSelectorView"), model);
>>>>>>> 85cd271353354d2723c579a29b2119cbac3c62ed

	var menuListView = new MenuListView($("#menuListView"), model);
	//}

	
	

	


});


//fade panels
$( document ).ready(function() {
  $( ".anim" ).fadeIn( "slow" );
});






