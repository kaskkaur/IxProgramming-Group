//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.MenuTotal = container.find("#MenuTotal");
	this.MenuList = container.find("#MenuList");
	this.DishObject = container.find("#DishObject")
	this.DishObject = container.find("#HeaderView")
	
	
	
	this.numberOfGuests.value = model.getNumberOfGuests(); 
	this.MenuTotal.value = model.getTotalMenuPrice(); 
	
	
	this.MenuList.text(model.getFullMenu()[0].name);
	console.log(MenuList);
	console.log(model.getFullMenu()[0].name);

	this.DishObject.html(model.getDish(1).description);



	//document.getElementById("MenuList").value = model.getFullMenu());
	//this.MenuList.innerHTML = model.getFullMenu()[0].name;
	//this.numberOfGuests.html(model.getNumberOfGuests());
	//this.setNumberOfGuests.html(model.setNumberOfGuests());
	
//}


//var DishesView = function (container, model) {

	this.SelectorView = container.find("#SelectorView");
	this.SelectorMenuView = container.find("#SelectorMenuView");
	this.SelectorDishesView = container.find("#SelectorDishesView");
	
	var FoodDetailString = "";
	var FoodList = model.getAllDishes("starter");
	console.log(SelectorDishesView);
	

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


	this.SelectorDishesView.html(FoodDetailString);
	console.log(FoodDetailString);




}








var MenuListView = function (container, model) {





}
 
 var HeaderView = function (container, model) {



 }



