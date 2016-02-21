//ExampleView Object constructor
var DinnerOverView = function (container, model) {
	
	
	
	
	
	
	$("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	
	
	

	
	var ViewerDishesString = "";
	var SelectorContainerString1 ="";
	//var SelectorFilterString ="";
	var DinnerList = model.getFullMenu();
	//console.log(SelectorDishes);
	var OverviewTopPanelString ="";
	
	

	


	SelectorContainerString1 +=  "<div class=\"container homelette\">" +

	"<div id=\"\" class=\"col-md-8 selector\"> <!-- whole selector area -->" + 
	"<div id=\"OverviewTopPanel\"></div>" +
	
	"<div id=\"ViewerDishes\"></div>" +

	 +

	

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


		


		ViewerDishesString += "<div class=\"col-lg-3\">"  +
							"<div class=\"panel panel-warning anim\">" +
					  			"<div class=\"panel-heading\">"+ DinnerList[i].name +

					  			"<span><button class=\"button button-default glyphicon glyphicon-plus AddButton\"></button></span>" +
					  			
					  			"<span><button class=\"button button-default glyphicon glyphicon glyphicon-th-list AddButton\"></button></span>" +


					  			"</div>" +
					  			"<div class=\"panel-body\">" +

					  				"<img src=\"images/" + DinnerList[i].image + "\"></img>" +

					  			"</div>" +
					  			"<div class=\"panel-footer\">" +DinnerList[i].price+"</div>" +
							"</div>" +
						"</div> "



	};




	$("#SelectorContainer1").html(SelectorContainerString1);
	$("#OverviewTopPanel").html(OverviewTopPanelString);
	$("#ViewerDishes").html(ViewerDishesString);
	
	
	//$("#SelectorDishes").html(SelectorDishesString);

	//document.getElementById("SelectorContainer").innerHTML = SelectorContainerString;
	//document.getElementById("SelectorFilter").innerHTML = SelectorFilterString;
	//document.getElementById("SelectorDishes").innerHTML = SelectorDishesString;
	

	console.log(SelectorContainerString1);
	//console.log(SelectorFilterString);
	//console.log(ViewerDishesString);

	
	




}






