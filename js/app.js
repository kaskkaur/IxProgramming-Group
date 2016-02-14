$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));

	
	window.onload = model.setNumberOfGuests;


});


//fade panels
$( document ).ready(function() {
  $( ".anim" ).fadeIn( "slow" );
});






