//ExampleView Object constructor
var DinnerPreperationView = function (container, model) {
	
	
	
	
	
	
	$("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	
	
	

	
	var DinnerPrepString = "";
	var SelectorContainerString2 ="";
	//var SelectorFilterString ="";
	var DinnerPrepList = model.getFullMenu();
	var DinnerHeadString="";
	//var ConfirmDinnerString="";
	
	//console.log(SelectorDishes);
	
	

	


	SelectorContainerString2 += "<div id=\"\" class=\"col-md-8 selector\"> <!-- whole selector area -->" + "<div id=\"DinnerHead2\"></div>"+

	"<div id=\"DinnerPrep\"></div>" + 


	

	"</div> " 

	

     DinnerHeadString += "<div class=\"col-md-12 selector-menu \">"+ 
			    		 
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


		



		DinnerPrepString +=  "<div class=\"preparation\"> "+
						  "<div class=\"row \"> "+
							
							" <div class=\"col-lg-3\">"+
									
								"<div class=\"preparation-image\">" +
									
									"<img class=\"img-thumbnail\" src=\"images/" + DinnerPrepList[i].image+"\"></img>"+
										
								"</div>" +

										
										
							"</div>"+

								"<div class=\"col-lg-3\">"+

									"<div class=\"preparation-image\">"+
									"<h3>"+ DinnerPrepList[i].name+" </h3>" +DinnerPrepList[i].description

									
								+"</div>"+

	
								"</div>"+ "</div>"




	};





	$("#SelectorContainer2").html(SelectorContainerString2);
	$("#DinnerPrep").html(DinnerPrepString);
	$("#DinnerHead2").html(DinnerHeadString1);
    
	//$("#SelectorDishes").html(SelectorDishesString);

	//document.getElementById("SelectorContainer").innerHTML = SelectorContainerString;
	//document.getElementById("SelectorFilter").innerHTML = SelectorFilterString;
	//document.getElementById("SelectorDishes").innerHTML = SelectorDishesString;
	

	//console.log(SelectorContainerString1);
	//console.log(ViewerDishesString);
	//console.log(ViewerDishesString);

	
	




}






