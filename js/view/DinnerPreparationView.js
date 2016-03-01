//ExampleView Object constructor
var DinnerPreparationView = function (container, model) {

	model.addObserver(this);
	this.container = container;
	
	
	
	var DinnerPrepList = model.getFullMenu();	
	
	var PreparationHeadString = "";
	var PreparationViewContainerString ="";
	
	var PreparationItemsString = "";

	
	


	PreparationViewContainerString += "<div id=\"\" class=\"col-md-8 selector\"> <!-- whole selector area -->" + 

	"<div id=\"PreparationHead\"></div>" +

	"<div id=\"PreparationItems\"></div>" + 


	

	"</div> " 

	// var PreparationHead = function() {

     

     PreparationHeadString += "<div class=\"col-md-12 selector-menu container\">"+ 
			    		 
			    			"<div class=\"col-md-6\"> "+

						    		" <h2 id=\"MyDinnerFor\">" + "My dinner for" + " " +  "<span id=\"GuestNumberPrep\"></span>" + " " + "people" + "</h2> " +	

							"</div>" +

							

					
							"<div class=\"col-md-6\"> "+

								"<a class=\"btn btn-group btn-group-md pull-right center-block\" role=\"group\" id=\"BackToSelector\" >"+
									"<type=\"button\" class=\"btn btn-default btn-custom OverviewBackToSelector\">" + "Go back and edit dinner"+" </a>"+

				    		 
							"</div>"+


								

			    	"</div>" 


			    // }

			    // PreparationHead();





	for (var i = 0; i < DinnerPrepList.length; i++) {
		console.log(DinnerPrepList[i].name);


		



		PreparationItemsString +=  "<div class=\"preparation\"> "+
						  "<div class=\"row \"> "+
							
							" <div class=\"col-lg-3\">"+
									
								"<div class=\"preparation-image\">" +
									
									"<img class=\"img-thumbnail\" src=\"images/" + DinnerPrepList[i].image+"\"></img>"+
										
								"</div>" +

										
										
							"</div>"+

								"<div class=\"col-lg-3\">"+

									"<div class=\"preparation-image\">"+
									"<h3>"+ DinnerPrepList[i].name + "</h3>" + DinnerPrepList[i].description +

									
								"</div>" +

	
								"</div>" + 

								"</div>"




	};
	this.update = function(arg) {

		if (arg === "guests") {

			//alert("SUP")




			$("#GuestNumberPrep").html(model.getNumberOfGuests());

		}


			


		}


		// this.update = function(arg) {


			// PreparationHeadString = [];
			// PreparationHead();
			// $("#DishViewContainer").html(DishViewContainerString);



		// }



	this.BackToSelector = $("#BackToSelector");

	
	$("#PreparationViewContainer").html(PreparationViewContainerString);
	
	$("#PreparationHead").html(PreparationHeadString);

	$("#GuestsPreparationView").val(model.getNumberOfGuests());

	$("#PreparationItems").html(PreparationItemsString);

	//$("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	$("#GuestNumberPrep").html(model.getNumberOfGuests());
    


}






