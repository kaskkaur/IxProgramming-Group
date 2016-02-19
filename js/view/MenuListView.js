//ExampleView Object constructor
var MenuListView= function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.MenuTotal = container.find("#MenuTotal");
	this.DishObject = container.find("#DishObject");
	this.MenuList = container.find("#MenuList");
	
	
	
	
	$("#numberOfGuests").val(model.getNumberOfGuests()); 
	//document.getElementById("MenuTotal").value = model.getTotalMenuPrice();
	$("#MenuTotal").val(model.getTotalMenuPrice()); 



	this.SelectorView = container.find("#SelectorContainer");
	this.SelectorMenuListView = container.find("#MenuViewListing");
	this.SelectorDishesView = container.find("#SelectorDishes");
	
	var FoodDetailString = "";
	var SelectorViewString ="";
	var MenuViewString ="";
	var MenuViewData=model.getFullMenu();
	//console.log(SelectorMenu);
	var FoodList = model.getAllDishes("starter");
	//console.log(SelectorDishes);
	

	for (var i = 0; i < MenuViewData.length; i++) {
		console.log(MenuViewData[i].name);


		MenuViewString +=  "<div class=\"ShoppingList\">" +
						"<span id=\"MenuList\"> </span>" +
						"<div>"+
							 " <tr>" +
								"<td>"  + MenuViewData[i].name + "</td>" +
								"<td>" + MenuViewData[i].type +  "</td>" +
								"</tr>" +
						
	"</div>" 
	};

		
		
		
		
		
		/*"<div class=\"col-lg-3\">" +
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
*/

	$("#SelectorDishes").html(FoodDetailString);
		$("#SelectorMenu").html(MenuViewString);
	
	
	console.log(FoodDetailString);
	console.log(MenuViewString);




}






