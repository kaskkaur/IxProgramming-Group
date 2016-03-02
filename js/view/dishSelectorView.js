//ExampleView Object constructor
var DishSelectorView = function (container, model) {

	model.addObserver(this);
	this.container = container;
	
	
		
	var SelectorDishesString = "";
	var SelectorContainerString ="";
	var SelectorFilterString ="";
	// var type = "main dish"
	var FoodList = model.getAllDishes("main dish");
	//console.log(SelectorDishes);
	


	SelectorContainerString += "<div id=\"\" class=\"col-sm-8 selector\"> <!-- whole selector area -->" + 

	"<div id=\"SelectorFilter\"></div>" + "<div id=\"SelectorDishes\"></div>" +

	    	


	"</div> <!-- selector area END -->" 

	SelectorFilterString += "<div class=\"col-sm-12 selector-menu\">" + 
			    		"<h2> <small id=\"selecttext\"> SELECT DISH </h2>" +
			    		"<hr>" +

			    		"<div id=\"\" class=\"row\"> <!-- selector menu keywords and accordion --> " +
						
						  "<div class=\"col-sm-6\">" +
						    "<div class=\"input-group\">" +
						      "<input id=\"FilterSearch\" type=\"text\" class=\"form-control\" placeholder=\"Enter keywords..\">" +
						      "<span  class=\"input-group-btn\">" +
						        "<button class=\"btn btn-default\" type=\"button\">" +
						        	"<span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>" + 

						        "</button>" +
						      "</span>" +
						    "</div><!-- /input-group -->" +
						  "</div><!-- /.col-sm-6 -->" +
				

			    	"<div class=\"col-sm-6\">" +

			    		"<select id=\"FilterMenu\" class=\"form-control\">" +
					    "<option value=\"main dish\">Main</option>" +
					    "<option value=\"dessert\">Dessert</option>" +
					    "<option value=\"starter\">Starters</option>" +
					    "<option value=\"drinks\">Drinks</option>" +
					    "<option value=\"other\">Other</option>" +
					"</select>" +
			    		
			    	"</div>" +

    	
			    "</div> <!-- selector menu keywords and accordion END -->" 


var SelectorDishesLoop = function() {

	for (var i = 0; i < FoodList.length; i++) {
		console.log(FoodList[i].name);
		id = FoodList[i].id


		


		SelectorDishesString += "<div class=\"col-sm-3\">" +
			"<div class=\"panel panel-warning\">" +
	  			"<div class=\"panel-heading\">" +   FoodList[i].name +

	  			// "<span><button id=\"" + "AddDish" + id + "\"class=\"button button-default glyphicon glyphicon-plus AddButton\"></button></span>" +
	  			
	  			"<span><button id=\"" + id + "\"class=\"button button-default glyphicon glyphicon glyphicon-plus AddButton DishInfoButton\"></button></span>" +


	  			"</div>" + 
	  			"<div class=\"panel-body\">" +

	  				"<img src=\"images/" + FoodList[i].image + "\"></img>" +

	  			"</div>" +
	  			"<div id =\"DishObject\" class=\"panel-footer\">" + FoodList[i].description +
	  			".</div>" +
			"</div>" +
		"</div>"



	};


	}

	SelectorDishesLoop();




		// this.update = function(model, arg) {

		// 	if (arg == "starter" || arg == "main dish" || arg == "dessert") {
		// 		this.updateType(arg);
		// 		alert("sip");

		// 	}
		// }
			


	this.update = function (arg) {

		if (arg == "TypeChange") {

		filter = "";
		FoodList = model.getAllDishes(model.DishType);

		SelectorDishesString = [];
		SelectorDishesLoop();
		$("#SelectorDishes").html(SelectorDishesString);


		} else if (arg == "SearchInput") {


			FoodList = model.getAllDishes(model.DishType, model.SearchString);

			SelectorDishesString = [];
			SelectorDishesLoop();
			$("#SelectorDishes").html(SelectorDishesString);



		}




	}


	



	console.log(this.AddDish);


	
	$("#DishSelectorContainer").html(SelectorContainerString);
	$("#SelectorFilter").html(SelectorFilterString);
	
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






