//ExampleView Object constructor
var DinnerPreparationView = function (container, model) {
	
	
	
	var DinnerPrepList = model.getFullMenu();
	
	
	
	var PreparationHeadString = "";
	var PreparationViewContainerString ="";
	
	var PreparationItemsString = "";

	
	


	PreparationViewContainerString += "<div id=\"\" class=\"col-md-8 selector\"> <!-- whole selector area -->" + 

	"<div id=\"PreparationHead\"></div>" +

	"<div id=\"PreparationItems\"></div>" + 


	

	"</div> " 

	

     PreparationHeadString += "<div class=\"col-md-12 selector-menu \">"+ 
			    		 
			    			"<div class=\"col-md-4\"> "+

						    		" <h2 id=\"MyDinnerFor\">"+"  My dinner for"+" </h2> "+	

							"</div>"+

							"<div class=\"col-md-4\">"+ 

						    		" <h2>"+
						    		 	"<span class=\"input-group\">"+ 
						    		 	
										"<input type=\"text\" value=\"3\" class=\"field left GuestsOverviewNumber\" readonly>"+	
										
									"</span>"+
								"</h2>"+


							"</div>"+

					
							"<div class=\"col-md-4\"> "+

						"<a class=\"btn btn-group btn-group-md pull-right center-block\" role=\"group\" id=\"BackToSelector\" href=\"select.html\">"+
									"<type=\"button\" class=\"btn btn-default btn-custom OverviewBackToSelector\">" + "Go back and edit dinner"+" </a>"+

				    		 
							"</div>"+


								"<hr>"+

			    	"</div>" 





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





	$("#PreparationViewContainer").html(PreparationViewContainerString);
	
	$("#PreparationHead").html(PreparationHeadString);

	$("#PreparationItems").html(PreparationItemsString);



	$("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 
    
	




}






