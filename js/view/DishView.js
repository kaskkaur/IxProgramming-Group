var DishView = function (container, model, id) {
	self = this;
	model.addObserver(this);
	this.container = container;
	
	
	







	//var DishTotal = model.getTotalDishPrice(1);

	// var dishID = model.currentID;
	// var dish = model.getDishData(model.currentID);
	var dish = [];

	//var DishViewGuests = model.getNumberOfGuests();
	var DishViewContainerString = "";
	var DishViewMenuString = "";
	console.log(dish);
	SpinnerString = "";



	// $.each(Dish, function (name, value) { 
	// 			var self = this;
	// 				$.each(this.ingredients, function (name, value)




	// 				});
	// 			});

	SpinnerString += 
		"<div class=\"spinner\">" +
	    "<img src=\"images/ajax-loader.gif\" alt=\"Loading...\"/>" +
		"</div>" 

	var DishViewContainer = function () {	


	DishViewContainerString += "<div class=\"col-sm-8 selector\"> <!-- whole selector area -->" +

			    "<div class=\"container\">" +

			    	"<div class=\"row\">" +
			    	"<div class=\"DishSpinner\"></div>" +

			    	 "<div class=\"col-sm-6 selector-method DishInfo\" id=\"Meatballs\">" +

						 	"<h2>" + dish.Title + "</h2>" +
						 	"<img class=\"img-thumbnail\" width=\"250\" height=\"250\" src=\"" + dish.ImageURL + "\"></img>" +

						 	"<p>" + dish.Description + "</p>" +
						 	"<h3>" + "Instructions" + "</h3>" +
						 	"<h4>" + "Total preparation time:" + " " + dish.TotalMinutes  + " " + "minutes" + "</h4>" +
						 	"<p>" + dish.Instructions + "</p>" +




						 
							
							
		
			    	
			    	"</div>" +



			    		"<div class=\"col-sm-6 selector-ingredients\">" +
			    			"<div class=\"col-sm-12\">" +

			    			"<div class=\"col-sm-6\">" + 
			    				"<h3>" + dish.Title + " " + "for</h3>" +

			    			"</div>" +


							"<div class=\"col-sm-6\">" +

			    				
			    				"<span class=\"input-group\">" + 
			    				"<br>" + 	
								"<h3>" + model.getNumberOfGuests() + "</h3>" +

								"</span>" +

			    			"</div>" +

			    			 "<table class=\"table table-hover \">" +
				    			  
				    				"<th>Amount</th>" +
				    				"<th>Unit</th>" + 
				    				"<th>Item</th>" +
				    				"<th>Price</th>" + 
				    			"</table>" +

			    			"</div>" +
			    			
	
						  	"<div class=\"col-sm-12 recipe-DishView\">" +

				    			
				    			  "<table class=\"table table-hover recipe-DishView\" id=\"DishViewMenu\">" +

				    			  "</table>" +

				    			
				    				"<th></th>" +
				    				"<th></th>" +
				    				"<th></th>" +
				    				
				    				

				    				"<th></th>" +
				    				"<th></th>" +
				    				"<th></th>" +
				    				"<th>"  + "</th>" +
				    				
				    			
								"</table>" +



			    			"</div> <!-- end of lasagne recipe -->" +

			    			"<div class=\"col-sm-12\">" +
			    			"<h3>Item total:" + "   " +  model.getTotalDishPriceView(id)   + "  " + "SEK" +  "</h3>" +

			    			"<a class=\"btn btn-group btn-group-md\" role=\"group\" id=\"DishBackToSelector\">" +
							"<type=\"button\" class=\"btn btn-default btn-custom\"> Back to Select Dish </a>" +

							"<span id=\"ConfirmButtonBox\">" +
							"<a class=\"btn-group btn-group-md\" role=\"group\" id=\"DishConfirmDish\">" +
							"<type=\"button\" class=\"btn btn-default btn-success ConfirmDishButton\"> Add to menu </button>" +
							"</a>" +
							"</span>" +
			    			"<hr>" +

			    			"</div>" +
			    			
			    			
   
						

						 	
							
		
			    	
			    		"</div>" +






			    	


						

			    	"</div>" +
			            
			"</div> <!-- selector menu keywords and accordion END -->" +


			

		"</div> <!-- selector area END -->"


		}
		DishViewContainer();



		var IngredientLooper = function () {
		
		$.each(dish.Ingredients, function (name, value) { 
				self = this;
				// alert("Are we looping Ingredients?")
				// console.log(self);
				// console.log(value.quantity);

				
		
								DishViewMenuString += 	
								"<tr>" +
								"<td>" + model.getNumberOfGuests() * value.MetricDisplayQuantity + "</td>" +
								"<td>" + value.MetricUnit +  "</td>" +
								"<td>" + value.Name +  "</td>" +
								"<td class=\"pull-left\">" + model.getNumberOfGuests() * model.price * value.MetricDisplayQuantity +  "</td>" +
								"<td>"  + "  SEK " +  "</td>" +
								"</tr>"


									
						
				});

		}

		// IngredientLooper();

		

	this.update = function(arg, data) {

		// console.log(arg)


		if (arg === "guests") {

				dish = model.DishDataArray;
				console.log(data);
				
				DishViewContainerString = "";
				DishViewContainer();
				$("#DishViewContainer").html(DishViewContainerString);


				DishViewMenuString = "";
				IngredientLooper();
				$("#DishViewMenu").html(DishViewMenuString);
				self.ConfirmDishButton = $("#DishConfirmDish");







			} else if (arg === "ID") {
				// alert("Update function dish is data");

				model.DishDataArray = [];
				model.DishDataArray = data;
				dish =  model.DishDataArray;
				
				// model.getDish(model.currentID);

				console.log(model.currentID);


				DishViewContainerString = "";
				DishViewContainer();
				console.log(DishViewContainerString);
				$("#DishViewContainer").html(DishViewContainerString);
				$(".DishSpinner").html(SpinnerString);


				DishViewMenuString = "";
				IngredientLooper();

				$("#DishViewMenu").html(DishViewMenuString);
				


			}

		


		}


		$("#DishViewContainer").html(DishViewContainerString);
		$("#DishViewMenu").html(DishViewMenuString);
		$(".DishSpinner").html(SpinnerString);
		this.DishConfirmDish = $(".DishBackToSelector");

		//this.DishBackToSelector = $("#DishBackToSelector");
		this.ConfirmDishButton = $(".ConfirmDishButton");

		//this.ConfirmDishButton = document.getElementById("DishConfirmDish");
		
		
		console.log(DishViewMenuString);


}