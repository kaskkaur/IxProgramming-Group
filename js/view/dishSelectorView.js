//ExampleView Object constructor
var DishSelectorView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.MenuTotal = container.find("#MenuTotal");
	this.MenuList = container.find("#MenuList");
	this.DishObject = container.find("#DishObject")
	
	
	
	
	$("#numberOfGuests").val(model.getNumberOfGuests()); 
	//document.getElementById("MenuTotal").value = model.getTotalMenuPrice();
	$("#MenuTotal").val(model.getTotalMenuPrice()); 

	
	
	// this.MenuList.text(model.getFullMenu()[0].name);
	// console.log(MenuList);
	// console.log(model.getFullMenu()[0].name);

	// this.DishObject.html(model.getDish(1).description);



	//document.getElementById("MenuList").value = model.getFullMenu());
	//this.MenuList.innerHTML = model.getFullMenu()[0].name;
	//this.numberOfGuests.html(model.getNumberOfGuests());
	//this.setNumberOfGuests.html(model.setNumberOfGuests());
	
//}


//var DishesView = function (container, model) {

	this.SelectorView = container.find("#SelectorContainer");
	this.SelectorMenuView = container.find("#SelectorFilter");
	this.SelectorDishesView = container.find("#SelectorDishes");
	
	var FoodDetailString = "";
	var SelectorViewString ="";
	var SelectorFilterView ="";
	var FoodList = model.getAllDishes("starter");
	console.log(SelectorDishes);
	

	for (var i = 0; i < FoodList.length; i++) {
		console.log(FoodList[i].name);


		FoodDetailString += "<div class=\"col-lg-3\">" +
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


	$("#SelectorDishes").html(FoodDetailString);
	console.log(FoodDetailString);




}






