//ExampleView Object constructor
var DishSelectorView = function (container, model) {

	model.addObserver(this);
	this.container = container;
	
	
		
	var SelectorDishesString = "";
	var SelectorContainerString ="";
	var SelectorFilterString ="";
	// var type = "main dish"
	var FoodList = model.getAllDishes("All");
	var SpinnerString = "";

	
	// this.updateInitial = function (arg, data) {
	// 	if (arg == "ID") {

	// 		FoodList = data;

	// 	};
	// }

	// 
	//console.log(SelectorDishes);
	
	SpinnerString += 
		"<div class=\"spinner\">" +
	    "<img src=\"images/ajax-loader.gif\" alt=\"Loading...\"/>" +
		"</div>" 

	SelectorContainerString += "<div id=\"\" class=\"col-sm-8 selector\"> <!-- whole selector area -->" + 


	
	"<div id=\"SelectorFilter\"></div>" + 

	"<div class=\"SelectorSpinner\"></div>" +

	

	"<div id=\"SelectorDishes\"></div>" +

	

	

	

		


	

	    	


	"</div> <!-- selector area END -->" 

	SelectorFilterString += "<div class=\"col-sm-12 selector-menu\">" + 
			    		"<h2> <small id=\"selecttext\"> SELECT DISH </h2>" +
			    		"<hr>" +

			    		"<div id=\"\" class=\"row\"> <!-- selector menu keywords and accordion --> " +
						
						  "<div class=\"col-sm-6\">" +
						    "<div class=\"input-group\">" +
						      "<input id=\"FilterSearch\" type=\"text\" class=\"form-control\" placeholder=\"Enter keywords..\">" +
						      "<span  class=\"input-group-btn\">" +
						        "<button id=\"SearchButton\" class=\"btn btn-default\" type=\"button\">" +
						        	"<span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>" + 

						        "</button>" +
						      "</span>" +
						    "</div><!-- /input-group -->" +
						  "</div><!-- /.col-sm-6 -->" +
				

			    	"<div class=\"col-sm-6\">" +

			    		"<select id=\"FilterMenu\" class=\"form-control\">" +
			    		"<option value=\"All\">All</option>" +
					    "<option value=\"Main\">Main</option>" +
					    "<option value=\"Desserts\">Dessert</option>" +
					    "<option value=\"Appetizers\">Starters</option>" +
					    "<option value=\"Drinks\">Drinks</option>" +
					    "<option value=\"Other\">Other</option>" +
					"</select>" +
			    		
			    	"</div>" +

    	
			    "</div> <!-- selector menu keywords and accordion END -->" 


var SelectorDishesLoop = function() {

	for (var i = 0; i < FoodList.length; i++) {
		console.log(FoodList[i].RecipeID);
		id = FoodList[i].RecipeID


		


		SelectorDishesString += "<div class=\"col-sm-3 \">" +
			"<div class=\"panel panel-warning \">" +
	  			"<div class=\"panel-heading DishSelectorPanels\">" +   FoodList[i].Title +

	  			// "<span><button id=\"" + "AddDish" + id + "\"class=\"button button-default glyphicon glyphicon-plus AddButton\"></button></span>" +
	  			
	  			// "<span><button id=\"" + id + "\"class=\"button button-default glyphicon glyphicon glyphicon-plus AddButton DishInfoButton\"></button></span>" +


	  			"</div>" + 
	  			"<div class=\"panel-body\">" +
	  				"<div class=\"col-xs-12\">" +

	  				"<div class=\"hovereffect\">" +
	  							"<img src=\"" + FoodList[i].ImageURL + "\" class=\"img-rounded DishInfoButton\" height=\"200\" width=\"100%\" ></img>" +
					        
					            "<div id=\"" + id + "\" class=\"overlay DishInfoButton\">" +
					               	"<p> " +
										"<p>SELECT</p>" +
									"</p> "+

					                "<h2></h2>" +
									
					          "  </div>" +
					  "  </div>" +
					 "  </div>" +

	  				

	  			"</div>" +
	  			"<div id =\"DishObject\" class=\"panel-footer\">" +  FoodList[i].Subcategory +
	  			".</div>" +
			"</div>" +
		"</div>"



	};


	}

	// SelectorDishesLoop();




		// this.update = function(model, arg) {

		// 	if (arg == "starter" || arg == "main dish" || arg == "dessert") {
		// 		this.updateType(arg);
		// 		alert("sip");

		// 	}
		// }



		
			


	this.update = function (arg, data) {

		if (arg == "TypeChange") {
			console.log(data);
		filter = "";
		FoodList = data;
		// model.getAllDishes(model.DishType);

		SelectorDishesString = [];
		SelectorDishesLoop();
		
		$("#SelectorDishes").html(SelectorDishesString);
		// $("#SelectorDishes").append(SpinnerString);



		} else if (arg == "SearchInput") {


			FoodList = data;

			SelectorDishesString = [];
			SelectorDishesLoop();
			$("#SelectorDishes").html(SelectorDishesString);



		} 



	}


	



	console.log(this.AddDish);


	
	$("#DishSelectorContainer").html(SelectorContainerString);
	$("#SelectorFilter").html(SelectorFilterString);
	
	$(".SelectorSpinner").html(SpinnerString);
	$("#SelectorDishes").html(SelectorDishesString);
	

	$("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	this.DishInfoButton = $(".DishInfoButton");
	this.FilterMenu = $("#FilterMenu");


	// this.FilterSearch = $("#FilterSearch");


	// this.DishInfoButton = $("#AddDish100");

	 

	 //this.DishInfoButton = document.getElementsByClassName("DishInfoButton");
	


	console.log(this.DishInfoButton)
	//document.getElementById("SelectorFilter").innerHTML = SelectorFilterString;
	//document.getElementById("SelectorDishes").innerHTML = SelectorDishesString;
	

	// console.log(SelectorContainerString);
	// console.log(SelectorFilterString);
	// console.log(SelectorDishesString);

	
	




}






