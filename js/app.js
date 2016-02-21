$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	
	//var DishesView = new DishesView($("#DishesView"), model);
	//var exampleView = new ExampleView($("#exampleView"), model);
	//$("StartButton").onclick {

	//var dinnerPreperationView= new DinnerPreperationView($("#dinnerPreperationView"), model);
	var dishSelectorView = new DishSelectorView($("#dishSelectorView"), model);
	var sideBarView = new SideBarView($("#sideBarView"), model);
<<<<<<< HEAD
	var dinnerOverview = new DinnerOverView($("#dinnerOverview"), model);
	var dishView = new DishView($("#dishView"), model);
=======
	var dinnerOverview = new DinnerOverview($("#dinnerOverview"), model);

>>>>>>> 33a6f983b13463e93d27f56edff7c9fde375da22

	//var dishSelectorView = new DishSelectorView($("#dishSelectorView"), model);


	//var menuListView = new MenuListView($("#menuListView"), model);
	//}

	
	

	


});


//fade panels
$( document ).ready(function() {
  $( ".anim" ).fadeIn( "slow" );
});






