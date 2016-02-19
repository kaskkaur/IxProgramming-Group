//ExampleView Object constructor
var DinnerOverView = function (container, model) {
	
	
	
	
	
	
	$("#numberOfGuests").val(model.getNumberOfGuests()); 

	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	
	
	

	
	var ViewerDishesString = "";
	var SelectorContainerString1 ="";
	//var SelectorFilterString ="";
	var DinnerList = model.getFullMenu();
	//console.log(SelectorDishes);
	
	

	


	SelectorContainerString1 += "<div id=\"\" class=\"col-md-8 selector\"> <!-- whole selector area -->" + 
	"<div id=\"ViewerDishes\"></div>" +

	

	"</div> <!-- selector area END -->" 

	



	for (var i = 0; i < DinnerList.length; i++) {
		console.log(DinnerList[i].name);


		


		ViewerDishesString += "<div class=\"col-lg-3\">" 
							"<div class=\"panel panel-warning anim\">"
					  			"<div class=\"panel-heading\">"+ DinnerList[i].name +

					  			"<span><button class=\"button button-default glyphicon glyphicon-plus AddButton\"></button></span>"
					  			
					  			"<span><button class=\"button button-default glyphicon glyphicon glyphicon-th-list AddButton\"></button></span>"


					  			"</div>"
					  			"<div class=\"panel-body\">"

					  				"<img src=\"images/" + DinnerList[i].image + "\"></img>"

					  			"</div>"
					  			"<div class=\"panel-footer\">" +DinnerList[i].price+"</div>"
							"</div>"
						"</div> "



	};




	$("#SelectorContainer1").html(SelectorContainerString1);
	$("#ViewerDishes").html(ViewerDishesString);
	
	//$("#SelectorDishes").html(SelectorDishesString);

	//document.getElementById("SelectorContainer").innerHTML = SelectorContainerString;
	//document.getElementById("SelectorFilter").innerHTML = SelectorFilterString;
	//document.getElementById("SelectorDishes").innerHTML = SelectorDishesString;
	

	console.log(SelectorContainerString1);
	//console.log(SelectorFilterString);
	console.log(ViewerDishesString);

	
	




}






