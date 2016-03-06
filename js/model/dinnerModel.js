//DinnerModel Object constructor
var DinnerModel = function() {



	this.DishDataArray = [];

	self = this;

	

	this.price = 1;
	// this.ingPrice = 1;

	DishType = "Main";

	this.currentID = 432218;

	// this.SearchString = "";

	this.getSearchString = function () {

		// this.notifyObservers("SearchInput");


	}
	

	this.getDishID = function() {
	
	// this.notifyObservers("ID");
	
	

	}


	this.getDishType = function() {
	
	this.notifyObservers("TypeChange");
	
	return DishType;
	


	}



	this.ObserversArray = [];
	

	this.addObserver = function(observer){
		this.ObserversArray.push(observer);



	}


	this.notifyObservers = function(arg, data){
		// console.log("notifyObservers arg = " + arg);
		// console.log(this.ObserversArray);

		for(var i = 0; i < this.ObserversArray.length; i++) {
			
			
			console.log("Observers" + this.ObserversArray);

			
			this.ObserversArray[i].update(arg, data);
			// this.ObserversArray[i].updateInitial(arg, data);




		}

	};



	this.setNumberOfGuests = function(num) {
		
		if(num > 1) {


			numberOfGuests = num;

		} else {

			numberOfGuests = 1;
		}

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



	

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {

		// alert("getfullmenu")
	
	console.log(menu)
	return menu;

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
			$.each(this.Ingredients, function (name, value) { //and then its child: ingredients
				multiplied = value.MetricDisplayQuantity * numberOfGuests; // multiply by # of guests
				
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

		var roundedTotal = Math.round(total);
		return roundedTotal;
		

}


this.getTotalDishPrice = function(id) {

		//this.notifyObservers("wat");
		var sumArr = [] //summation array
		// currentDish = this.DishDataArray;

	for(key in menu){
			if(menu[key].RecipeID == id) {


				$.each(menu[key].Ingredients, function (name, value) { //and then its child: ingredients
			// 	console.log(value) // multiply by # of guests
				multiplied = value.MetricDisplayQuantity * numberOfGuests;
				
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


		var roundedTotal = Math.round(total);
		return roundedTotal;
		
}

this.getTotalDishPriceView = function() {
	
	currentDish = this.DishDataArray;
	ing = currentDish.Ingredients;
	console.log(currentDish.Ingredients);

	var sumArr = [] //summation array

	for(key in ing){

			
			multiplied = ing[key].MetricDisplayQuantity * numberOfGuests;
			sumArr.push(multiplied);
			
			}



	console.log(sumArr);


	var total = 0; 
		for(var i = 0; i < sumArr.length; i++)
		{
		    total = total + sumArr[i];
		}

		var roundedTotal = Math.round(total);
		console.log(total);
		console.log(roundedTotal);
		return roundedTotal;
}


// this.getTotalDishPrice = function(id) {

// 		//this.notifyObservers("wat");
// 		var sumArr = [] //summation array
// 		currentDish = this.DishDataArray;

	

// 				$.each(currentDish.Ingredients, function (name, value) { //and then its child: ingredients
// 			// 	console.log(value) // multiply by # of guests
// 				multiplied = value.MetricQuantity * numberOfGuests;
				
// 				sumArr.push(multiplied) //add all of the multiplied values to summation array
							
// 					});


			
				
		
// 	// 	console.log(currentDish)
// 	// // 	// console.log(currentDish.Ingredients)
// 	// 	ing = currentDish.Ingredients;
// 	// // 	console.log();

			

// 		// get the total from the array
// 		var total = 0; 
// 		for(var i = 0; i < sumArr.length; i++)
// 		{
// 		    total = total + sumArr[i];
// 		}

		

// 		return total;
// }







	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
this.addDishToMenu = function(id) {

	for (var j = 0; j < menu.length; j++) {
			var obj = menu[j]
			var remove = obj.RecipeID;
			
				
				if (remove == id) {
					
					var removeItem = obj;
					menu = jQuery.grep(menu, function(value) {
						return value != removeItem;
					});
					// menu.splice(obj, 1);
					
					break;
					

				};

			};


	console.log(id);
	// alert("adddishfunc");
	console.log(this.DishDataArray)
	// console.log(this.DishDataArray)
	// console.log(menu);
	// ToBeAdded = this.DishDataArray;
	menu.push(this.DishDataArray)
	console.log(menu);


		// for (var j = 0; j < menu.length; j++) {
		// 	var obj = menu[j]
			


			




		// for(var i = 0; i < dishes.length; i++) {
		//     var obj = dishes[i];
		//     var DishID = obj.id;
		//  	if (DishID == id) {
		 		// alert("ADD")
		 		
		   			// menu.push(this.DishDataArray);
		   			// break;
		   			
	
		   	// 	};

		   	// };

	
	// console.log(menu);
	this.notifyObservers("AddItems");
}

		
	

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		
		console.log(id);


		for (var j = 0; j < menu.length; j++) {
			var obj = menu[j]
			var remove = obj.RecipeID;
			
				
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
		
		console.log(type);
		self = this;
		dishType = type;

			var typeString = "";
			var RecipeArray = [];
			var searchString = "";
			filterKey = filter;
			console.log(filterKey)

		if((filterKey != "" && typeof filterKey != "undefined") || (filterKey != "" && typeof filterKey != "undefined")) {
			// alert("we not empty")

			searchString = "title_kw=" + filterKey + "&"
			   
							
			} else {

				searchString = "";
			}



		if (dishType === "All") {

			typeString = "";

		} else {

			typeString = "include_primarycat=" + dishType


		}

		console.log(DishType)
			
			
			
			
			paging = "&pg=6&rpp=10"

			var apiKey = "66J8l00npnHHZcCNLRhxkfW1OHxbojy4";
			// var recipeID = 196149;
			var url = "http://api.bigoven.com/recipes?" + searchString + typeString + paging + "&api_key=" + apiKey;

			console.log(url);
			
			$.ajax({
			         type: "GET",
			         dataType: 'json',
			         cache: false,
			         url: url,
			         context: this,
			         success: function (data) {

			         	console.log(data);
			         	results = data.Results;

			         	 this.notifyObservers("TypeChange", results);
			         	 RecipeArray.push(data);
			         	
			         
			           
			           
			            }

			         });
	
	  console.log(RecipeArray);
	  // return RecipeArray;
	}


	this.getDishData = function (id) { 
				// alert("DishdataFunc")

		
							var apiKey = "66J8l00npnHHZcCNLRhxkfW1OHxbojy4";
							
							console.log(id + "HEY Im rec value")
			         		recipeID = id;

			         		var recipeURL =	"http://api.bigoven.com/recipe/" + recipeID	+ "?api_key=" + apiKey;

			         		$.ajax({
							         type: "GET",
							         dataType: 'json',
							         cache: false,
							         url: recipeURL,
							         context: this,
							         success: function (recipeData) {
							         // this.DishDataArray.push(recipeData);
							         this.notifyObservers("ID", recipeData);

							          // alert('success');
					            
							            }

							         });

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


	var menu = [		
	];

	numberOfGuests = 1;
	



}
