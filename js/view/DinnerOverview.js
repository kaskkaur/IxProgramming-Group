//ExampleView Object constructor
var DinnerOverview = function (container, model) {
	

	var DinnerList = model.getFullMenu();


	
	var OverviewDishesString = "";
	var OverviewConfirmString="";
	var OverviewTopPanelString ="";
	var OverviewContainerString ="";




	OverviewContainerString +=  "<div class=\"container homelette\">" +

	"<div id=\"\" class=\"col-md-8 selector\"> <!-- whole selector area -->" + 
	"<div id=\"OverviewTopPanel\"></div>" +
	
	"<div id=\"OverviewDishes\"></div>" +
	"<div id=\"OverviewConfirm\"></div>" +


	"</div>" + 
	"</div>" + 
	

	 "<!-- selector area END -->" 



	OverviewTopPanelString += "<div class=\"col-md-12 selector-menu\"> " +
			    		 
			    			"<div class=\"col-md-4\">" + 

						    		 "<h2 id=\"MyDinnerFor\">  My dinner for </h2>" + 	

							"</div>" +

							"<div class=\"col-md-4\">" + 

						    		 "<h2>" +
						    		 	"<span class=\"input-group\">" +
						    		 	
										"<input type=\"text\" value=\"3\" class=\"field left GuestsOverviewNumber\" readonly>" +	
										
									"</span>" + 
								"</h2>" +

							"</div>" +
					
							"<div class=\"col-md-4\">" + 

								"<a class=\"btn btn-group btn-group-md pull-right center-block\" href=\"select.html\" role=\"group\" id=\"BackToSelector\">" +
									"<type=\"button\" class=\"btn btn-default btn-custom OverviewBackToSelector\"> Go back and edit dinner </a>" +
		 
							"</div>" +


								"<hr>" +

			    	"</div> <!-- \"My dinner for\" and button end -->" 



	for (var i = 0; i < DinnerList.length; i++) {
		console.log(DinnerList[i].name);
		id = DinnerList[i].id;


		OverviewDishesString += "<div class=\"col-lg-3\">" +
							"<div class=\"panel panel-warning anim\">"+
					  			"<div class=\"panel-heading\">"+ DinnerList[i].name +

					  			"<span><button class=\"button button-default glyphicon glyphicon-plus AddButton\"></button></span>"+
					  			
					  			"<span><button class=\"button button-default glyphicon glyphicon glyphicon-th-list AddButton\"></button></span>"+


					  			"</div>"+
					  			"<div class=\"panel-body\">"+

					  				"<img src=\"images/" + DinnerList[i].image + "\"></img>"+

					  			"</div>"+
					  			"<div class=\"panel-footer\">" + model.getTotalDishPrice(id) + " " + "SEK" + "</div>"+
							"</div>"+

						"</div> "



	};

	OverviewConfirmString += "<div class=\"row\">"+ 

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



	$("#OverviewContainer").html(OverviewContainerString);

	$("#OverviewTopPanel").html(OverviewTopPanelString);

	$("#OverviewDishes").html(OverviewDishesString);

    $("#OverviewConfirm").html(OverviewConfirmString);

    $("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	
	




}






