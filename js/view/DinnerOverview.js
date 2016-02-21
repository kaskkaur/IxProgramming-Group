//ExampleView Object constructor
var DinnerOverview = function (container, model) {
	
	
	
	
	
	
	$("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	
	
	

	
	var ViewerDishesString = "";
	var SelectorContainerString1 ="";
	var SelectorFilterString ="";
	var DinnerList = model.getFullMenu();
	var DinnerHeadingString="";
	var ConfirmDinnerString="";
	
	//console.log(SelectorDishes);
	
	

	


	SelectorContainerString1 += "<div id=\"\" class=\"col-md-8 selector\"> <!-- whole selector area -->" + "<div id=\"DinnerHead\"></div>"+

	"<div id=\"ViewerDishes\"></div>" + "<div id=\"ConfirmDinner\"></div>"+


	

	"</div> <!-- selector area END -->" 

	

DinnerHeadingString+=  "<div class=\"col-md-12 selector-menu \">" + "<div class=\"col-md-4\">"+ 

						    		 "<h2 id=\"MyDinnerFor\">"+  "My dinner for"+ " </h2> "+	

							"</div>"+

							"<div class=\"col-md-4\">"+ 

						    		" <h2>"+
						    		 	"<span class=\"input-group\"> "+
						    		 	
										"<input type=\"text\" value=\"3\" class=\"field left GuestsOverviewNumber\" readonly>"+
										
									"</span>"+
								"</h2>"+


							"</div>"+
	"<div class=\"col-md-4\"> "+

			"<a class=\"btn btn-group btn-group-md pull-right center-block \" role=\"group\" id=\"BackToSelector\" href=\"select.html\">"+
									"<type=\"button\" class=\"btn btn-default btn-custom OverviewBackToSelector\"> Go back and edit dinner </a>"+
									
									
				    		 
							 "</div>"+
							"<hr>" +
							"</div>" 





	for (var i = 0; i < DinnerList.length; i++) {
		console.log(DinnerList[i].name);


		



		ViewerDishesString += "<div class=\"col-lg-3\">" +
							"<div class=\"panel panel-warning anim\">"+
					  			"<div class=\"panel-heading\">"+ DinnerList[i].name +

					  			"<span><button class=\"button button-default glyphicon glyphicon-plus AddButton\"></button></span>"+
					  			
					  			"<span><button class=\"button button-default glyphicon glyphicon glyphicon-th-list AddButton\"></button></span>"+


					  			"</div>"+
					  			"<div class=\"panel-body\">"+

					  				"<img src=\"images/" + DinnerList[i].image + "\"></img>"+

					  			"</div>"+
					  			"<div class=\"panel-footer\">" +DinnerList[i].type+"</div>"+
							"</div>"+
						"</div> "



	};

ConfirmDinnerString=+ "<div class=\"row\">"+ 

			    			"<hr>"+
			    			"<br>"+
			    			"<br>"+

"<div class=\"row\">" +
						
						
							"<div class=\"col-md-6 text-right center-block pull-right\">" +


						
						"<div class=\"input-group overview-input text-right\" style=\"width: 200px;\" id=\"OverviewTotal\">" +
							   "<span class=\"input-group-addon\" id=\"OverviewTotal TotalColor\">" +"Total" +"</span>"+
							 " <input type=\"text\" class=\"form-control\" aria-label=\"Amount\" readonly value=\"892\">" +
							   "<span class=\"input-group-addon\"id=\"OverviewTotal TotalColor\" >" +"SEK"+"</span>" +
						"</div>" +
						
					"</div>" +
					
				
			"</div>"+


				"<div class=\"row\">"+
					"<div class=\"container\">"+
				    		"<div class=\"col-md-6 PrintFullRecipe\"> "+
							"<a id=\"PrintFullRecipe\" name=\"singlebutton\" class=\"btn btn-primary btn-custom PrintFullRecipe\" href=\"dinner_preparation.html\">" +"Print full recipe!"+"</a> "+
							"</div>"+
						"</div>"+
				"</div>"+
				"</div>"



	$("#SelectorContainer1").html(SelectorContainerString1);
	$("#ViewerDishes").html(ViewerDishesString);
	$("#DinnerHead").html(DinnerHeadingString);
    $("#ConfirmDinner").html(ConfirmDinnerString);
	
	//$("#SelectorDishes").html(SelectorDishesString);

	//document.getElementById("SelectorContainer").innerHTML = SelectorContainerString;
	//document.getElementById("SelectorFilter").innerHTML = SelectorFilterString;
	//document.getElementById("SelectorDishes").innerHTML = SelectorDishesString;
	

	//console.log(SelectorContainerString1);
	console.log(ViewerDishesString);
	//console.log(ViewerDishesString);

	
	




}






