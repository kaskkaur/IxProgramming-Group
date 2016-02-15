//ExampleView Object constructor
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html("Hello World");



		


		 alert('SETnumberofGuests func initiated')


		$(".button-increment").on("click", function() {

		  var $button = $(this);
		  var oldValue = $("#GuestsNumber").val();

		  if ($button.is("#plusGuest")) {
			  var newVal = parseFloat(oldValue) + 1;
			} else {
		   // no negative values
		    if (oldValue > 0) {
		      var newVal = parseFloat(oldValue) - 1;
		    } else {
		      newVal = 0;
		    }
		  }

		  $("#GuestsNumber").val(newVal);
		  
		  console.log(newVal)
		

		});


	
}
 
