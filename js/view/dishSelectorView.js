//ExampleView Object constructor
var DishSelectorView = function (container, model) {

	model.addObserver(this);
	
	


	
		
	var SelectorDishesString = "";
	var SelectorContainerString ="";
	var SelectorFilterString ="";
	var FoodList = model.getAllDishes("starter");
	//console.log(SelectorDishes);
	


	SelectorContainerString += "<div id=\"\" class=\"col-md-8 selector\"> <!-- whole selector area -->" + 

	"<div id=\"SelectorFilter\"></div>" + "<div id=\"SelectorDishes\"></div>" +

	    	


	"</div> <!-- selector area END -->" 

	SelectorFilterString += "<div class=\"col-md-12 selector-menu\">" + 
			    		"<h2> <small id=\"selecttext\"> SELECT DISH </h2>" +
			    		"<hr>" +

			    		"<div id=\"\" class=\"row\"> <!-- selector menu keywords and accordion --> " +
						
						  "<div class=\"col-lg-6\">" +
						    "<div class=\"input-group\">" +
						      "<input type=\"text\" class=\"form-control\" placeholder=\"Enter keywords..\">" +
						      "<span class=\"input-group-btn\">" +
						        "<button class=\"btn btn-default\" type=\"button\">" +
						        	"<span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>" + 

						        "</button>" +
						      "</span>" +
						    "</div><!-- /input-group -->" +
						  "</div><!-- /.col-lg-6 -->" +
				

			    	"<div class=\"col-lg-6\">" +

			    		"<select class=\"form-control\">" +
					    "<option value=\"main\">Main</option>" +
					    "<option value=\"dessert\">Dessert</option>" +
					    "<option value=\"appetiser\">Appetiser</option>" +
					    "<option value=\"drinks\">Drinks</option>" +
					    "<option value=\"other\">Other</option>" +
					"</select>" +
			    		
			    	"</div>" +

    	
			    "</div> <!-- selector menu keywords and accordion END -->" 




	for (var i = 0; i < FoodList.length; i++) {
		console.log(FoodList[i].name);


		


		SelectorDishesString += "<div class=\"col-lg-3\">" +
			"<div class=\"panel panel-warning anim\">" +
	  			"<div class=\"panel-heading\">" +   FoodList[i].name +

	  			"<span><button class=\"button button-default glyphicon glyphicon-plus AddButton\"></button></span>" +
	  			
	  			"<span><button class=\"button button-default glyphicon glyphicon glyphicon-th-list AddButton\"></button></span>" +


	  			"</div>" + 
	  			"<div class=\"panel-body\">" +

	  				"<img src=\"images/" + FoodList[i].image + "\"></img>" +

	  			"</div>" +
	  			"<div id =\"DishObject\" class=\"panel-footer\">" + FoodList[i].description +
	  			".</div>" +
			"</div>" +
		"</div>"



	};




		this.update = function(arg) {


			


		}


	$("#SelectorContainer").html(SelectorContainerString);
	$("#SelectorFilter").html(SelectorFilterString);
	
	$("#SelectorDishes").html(SelectorDishesString);

	$("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	//document.getElementById("SelectorContainer").innerHTML = SelectorContainerString;
	//document.getElementById("SelectorFilter").innerHTML = SelectorFilterString;
	//document.getElementById("SelectorDishes").innerHTML = SelectorDishesString;
	

	console.log(SelectorContainerString);
	console.log(SelectorFilterString);
	console.log(SelectorDishesString);

	
	




}






