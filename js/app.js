$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);

	
	window.onload = model.getNumberOfGuests();


});


//fade panels
$( document ).ready(function() {
  $( ".anim" ).fadeIn( "slow" );
});






