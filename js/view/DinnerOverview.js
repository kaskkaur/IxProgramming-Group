//ExampleView Object constructor
var DinnerOverview = function (container, model) {

	model.addObserver(this);
	this.container = container;
	
	var DinnerList = [];
	var GuestNumber = model.getNumberOfGuests();

	
	var OverviewDishesString = "";
	var OverviewConfirmString="";
	var OverviewTopPanelString ="";
	var OverviewContainerString ="";


	OverviewContainerString +=  "<div class=\"container homelette\">" +

	"<div id=\"\" class=\"col-sm-12 selector\"> <!-- whole selector area -->" + 
	"<div id=\"OverviewTopPanel\"></div>" +
	
	"<div id=\"OverviewDishes\"></div>" +
	"<div id=\"OverviewConfirm\"></div>" +


	"</div>" + 
	"</div>" + 
	

	 "<!-- selector area END -->" 



	OverviewTopPanelString += 

	"<div class=\"container\">" + 
		"<div class=\"col-sm-12 selector-menu\"> " +
			    		 	"<div class=\"container\">" + 
			    			
			    			"<div class=\"col-sm-2 pull-left\">" + 

						    		 "<h2 id=\"MyDinnerFor\">  My dinner for" + " " + "<span id =\"GuestNumber\"></span>" + "  " + "people" +  "</h2>" + 	

							"</div>" +

							
					
							"<div class=\"col-sm-2  \">" + 

								"<a class=\"btn btn-group btn-group-md pull-right center-block role=\"group\" id=\"BackToSelector\">" +
									"<type=\"button\" class=\"btn btn-default btn-custom\"> Go back and edit dinner </a>" +
		 
							"</div>" +

						

						"<div class=\"col-sm-2 PrintButton center-block\">" +
					
				    		
							"<a id=\"PrintFullRecipe\" name=\"singlebutton\" class=\"btn btn-default\" >" +"Print full recipe!"+"</a> "+
							
						
						"</div>"+

						"<div class=\"col-xs-2\">" + 

						"<div class=\"input-group overview-input text-right \" style=\"width: 200px;\" id=\"OverviewTotal\">" +
							   "<span class=\"TotalColor input-group-addon\" id=\" \">" +"Total" +"</span>"+
							 " <input id=\"OverviewMenuTotal\" type=\"text\" class=\"form-control\" aria-label=\"Amount\" readonly value=\"892\">" +
							   "<span class=\"TotalColor input-group-addon\"id=\" \" >" +"SEK"+"</span>" +
						"</div>" +

						"</div>" +

						"<div class=\"col-sm-4\">" +
					
				    		
							
							
						
						"</div>"+

						
						
						"</div>" +

						"</div>" +

								

			    	"</div> <!-- \"My dinner for\" and button end -->" 


var OverviewDishesLooper = function () {
	
	for (var i = 0; i < DinnerList.length; i++) {
		console.log(DinnerList[i].Title);
		id = DinnerList[i].RecipeID;


		OverviewDishesString += "<div class=\"col-sm-3\">" +
							"<div class=\"panel panel-warning\">"+
					  			"<div class=\"panel-heading\">"+ DinnerList[i].Title +

					  			// "<span><button class=\"button button-default glyphicon glyphicon-plus AddButton\"></button></span>"+
					  			
					  			// "<span><button class=\"button button-default glyphicon glyphicon glyphicon-th-list AddButton\"></button></span>"+


					  			"</div>"+
					  			"<div class=\"panel-body\">"+

					  				"<img class=\"img-circle\" width=\"100%\" height=\"100%\" src=\"" + DinnerList[i].ImageURL + "\"></img>"+

					  			"</div>"+
					  			"<div class=\"panel-footer\">" + model.getTotalDishPrice(id) + " " + "SEK" + "</div>"+
							"</div>"+

						"</div> "



	};

	}

	OverviewDishesLooper();

	OverviewConfirmString += "<div class=\"row\">"+ 

			    			"<hr>"+
			    			"<br>"+
			    			"<br>"+
			    			"</div>"


	this.update = function(arg) {


		if (arg === "guests") {

			


				
				
				$("#GuestNumber").html(model.getNumberOfGuests());
				
				OverviewDishesString = [];
				OverviewDishesLooper();
				$("#OverviewDishes").html(OverviewDishesString);

				$("#OverviewMenuTotal").val(model.getTotalMenuPrice());



			} else if (arg === "AddItems") {
				// alert("addItems?_overview")

				DinnerList = model.getFullMenu();
				console.log(DinnerList);

				OverviewDishesString = [];
				OverviewDishesLooper();
				
				$("#OverviewDishes").html(OverviewDishesString);

				
				$("#OverviewMenuTotal").val(model.getTotalMenuPrice());






			} else if (arg === "RemoveItems") {


				DinnerList = model.getFullMenu();

				OverviewDishesString = [];
				OverviewDishesLooper();
				$("#OverviewDishes").html(OverviewDishesString);
				$("#OverviewMenuTotal").val(model.getTotalMenuPrice());

			}

		}



	this.BackToSelector = $("#BackToSelector");
	this.PrintFullRecipe = $("#PrintFullRecipe");


	$("#OverviewContainer").html(OverviewContainerString);

	$("#OverviewTopPanel").html(OverviewTopPanelString);

	$("#OverviewDishes").html(OverviewDishesString);

    $("#OverviewConfirm").html(OverviewConfirmString);

    $("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	$("#OverviewMenuTotal").val(model.getTotalMenuPrice());

	$("#GuestNumber").html(model.getNumberOfGuests());

	

}






