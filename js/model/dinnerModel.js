//DinnerModel Object constructor
var DinnerModel = function() {

	self = this;

	// this.currentDish = function (arg) {

	// 	

	// arg = id;
	// return id;
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

	// }

	DishType = "main dish";

	this.currentID = 101;

	this.SearchString = "";


	this.getSearchString = function () {

		this.notifyObservers("SearchInput");


	}
	

	this.getDishID = function() {
	
	this.notifyObservers("ID");
	
	

	}



	this.getDishType = function() {
	
	this.notifyObservers("TypeChange");
	
	return DishType;
	


	}
	

	



	this.ObserversArray = [];
	

	this.addObserver = function(observer){
		this.ObserversArray.push(observer);



	}


	this.notifyObservers = function(arg){
		// console.log("notifyObservers arg = " + arg);
		// console.log(this.ObserversArray);

		for(var i = 0; i < this.ObserversArray.length; i++) {
			
			
			console.log("Observers" + this.ObserversArray);

			
			this.ObserversArray[i].update(arg);




		}

	};



	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;

		this.notifyObservers("guests");



	}

	// should return 
	this.getNumberOfGuests = function() {
		

		// alert('GETNumOfGuests initiated')
		
		//console.log(numberOfGuests)
		return numberOfGuests;
		
		

	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {

		// alert('SELECTdishfunc initiated');

		var TypeArray = [] // we create an empty array to store the specific type dishes

		for (var key = 0; key < menu.length; key++) {
      	 if (menu[key].type === type){ // check if type matches
      	 	var obj = menu[key]
      	 	TypeArray.push(obj); // place to array

      	 	}
  
   		 }
     	console.log(TypeArray);
    	return TypeArray;
}





		//TODO Lab 2
	

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {


		MenuArray = []

		for(var i = 0; i < menu.length; i++) {
		    var obj = menu[i];
         
		    MenuArray.push(obj);
		   		    //console.log(obj)
		 


	
	  //return menu;

		    //MenuArray.push(obj);
		    //console.log(obj.name);
		    
	}
	console.log(MenuArray)
	return MenuArray;

		//TODO Lab 2
}
//console.log(obj.name)
 //return obj.name;
	    
    //return obj.name;
		    
	
	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
			
			IngredientsArray = []

			for(var i = 0; i < menu.length; i++) {
		    var obj = menu[i];
		    var DishIngredients = obj.ingredients

		   IngredientsArray.push(DishIngredients)


	}

	console.log(IngredientsArray);
	return IngredientsArray;
}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {

		// alert("totalmenuprice")

		var sumArr = [] //summation array
	
		$.each(menu, function () { // loop through menu 
			$.each(this.ingredients, function (name, value) { //and then its child: ingredients
				multiplied = value.price * numberOfGuests; // multiply by # of guests
				
				sumArr.push(multiplied) //add all of the multiplied values to summation array
							
			});

		});

		// get the total from the array
		var total = 0; 
		for(var i = 0; i < sumArr.length; i++)
		{
		    total = total + sumArr[i];
		}

		console.log(total)

		return total;
		

}


this.getTotalDishPrice = function(id) {

		//this.notifyObservers("wat");
	

		var sumArr = [] //summation array

	


	for(key in dishes){
			if(dishes[key].id == id) {
				


		
			$.each(dishes[key].ingredients, function (name, value) { //and then its child: ingredients
				multiplied = value.price * numberOfGuests; // multiply by # of guests
				
				sumArr.push(multiplied) //add all of the multiplied values to summation array
							
					});

			}
		}
	
		


		// get the total from the array
		var total = 0; 
		for(var i = 0; i < sumArr.length; i++)
		{
		    total = total + sumArr[i];
		}

		console.log(total)

		return total;
		

}







	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {

	
	
	// alert("adddishfunc");



		for (var j = 0; j < menu.length; j++) {
			var obj = menu[j]
			var remove = obj.id;
			
				
				if (remove == id) {
					
					var removeItem = obj;
					menu = jQuery.grep(menu, function(value) {
						return value != removeItem;
					});
					// menu.splice(obj, 1);
					
					break;
					

				};

			};


		for(var i = 0; i < dishes.length; i++) {
		    var obj = dishes[i];
		    var DishID = obj.id;
		 	if (DishID == id) {
		 		// alert("ADD")
		 		
		   			menu.push(obj);
		   			break;
		   			
	
		   		};

		   	};

	
	console.log(menu);
	this.notifyObservers("AddItems");
}

		
	

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		
		console.log(id);


		for (var j = 0; j < menu.length; j++) {
			var obj = menu[j]
			var remove = obj.id;
			
				
				if (remove == id) {
					
					var removeItem = obj;
					menu = jQuery.grep(menu, function(value) {
						return value != removeItem;
					});
					// menu.splice(obj, 1);
					
					break;
					

				};

			};


		
			this.notifyObservers("RemoveItems");
		//TODO Lab 2
	}
	


	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {


	  return $(dishes).filter(function(index,dish) {

		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;

			}
		}
		// model.notifyObservers("TypeChange");
	  	return dish.type == type && found;


	  });	
	  // this.notifyObservers("TypeChange");
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {

	  for(key in dishes){
			if(dishes[key].id == id) {
				// this.notifyObservers("ID");
				
				return dishes[key];


			}


		}
		

		
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	
		//  var menu = [{
		// 'id':101,
		// 'name':'MD 2',
		// 'type':'main dish',
		// 'image':'bakedbrie.jpg',
		// 'description':"Here is how you make it... Lore ipsum...",
		// 'ingredients':[{ 
		// 	'name':'ingredient 1',
		// 	'quantity':1,
		// 	'unit':'pieces',
		// 	'price':8
		// 	},{
		// 	'name':'ingredient 2',
		// 	'quantity':15,
		// 	'unit':'g',
		// 	'price':7
		// 	},{
		// 	'name':'ingredient 3',
		// 	'quantity':10,
		// 	'unit':'ml',
		// 	'price':4
		// 	}]
		// },{
		// 'id':102,
		// 'name':'MD 3',
		// 'type':'main dish',
		// 'image':'meatballs.jpg',
		// 'description':"Here is how you make it... Lore ipsum...",
		// 'ingredients':[{ 
		// 	'name':'ingredient 1',
		// 	'quantity':2,
		// 	'unit':'pieces',
		// 	'price':8
		// 	},{
		// 	'name':'ingredient 2',
		// 	'quantity':10,
		// 	'unit':'g',
		// 	'price':7
		// 	},{
		// 	'name':'ingredient 3',
		// 	'quantity':5,
		// 	'unit':'ml',
		// 	'price':4
		// 	}]
		// }];
	var menu = [
	// 	'id':101,
	// 	'name':'MD 2',
	// 	'type':'main dish',
	// 	'image':'bakedbrie.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ingredient 1',
	// 		'quantity':1,
	// 		'unit':'pieces',
	// 		'price':8
	// 		},{
	// 		'name':'ingredient 2',
	// 		'quantity':15,
	// 		'unit':'g',
	// 		'price':7
	// 		},{
	// 		'name':'ingredient 3',
	// 		'quantity':10,
	// 		'unit':'ml',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':102,
	// 	'name':'MD 3',
	// 	'type':'main dish',
	// 	'image':'meatballs.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ingredient 1',
	// 		'quantity':2,
	// 		'unit':'pieces',
	// 		'price':8
	// 		},{
	// 		'name':'ingredient 2',
	// 		'quantity':10,
	// 		'unit':'g',
	// 		'price':7
	// 		},{
	// 		'name':'ingredient 3',
	// 		'quantity':5,
	// 		'unit':'ml',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':201,
	// 	'name':'Vanilla Ice cream',
	// 	'type':'dessert',
	// 	'image':'icecream.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ice cream',
	// 		'quantity':100,
	// 		'unit':'ml',
	// 		'price':6
	// 		}]
	// 	},{
	// 	'id':202,
	// 	'name':'Strawberry',
	// 	'type':'dessert',
	// 	'image':'icecream.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ice cream',
	// 		'quantity':100,
	// 		'unit':'ml',
	// 		'price':6
	// 		}]
	// 	}

		
	];

	numberOfGuests = 1;
	
	
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}

