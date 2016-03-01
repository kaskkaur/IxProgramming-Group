var DishView = function (container, model, id) {

	model.addObserver(this);
	this.container = container;
	
	dishID = 1;
	this.id = dishID;






	//var DishTotal = model.getTotalDishPrice(1);

	
	var dish = model.getDish(dishID);
	//var DishViewGuests = model.getNumberOfGuests();
	var DishViewContainerString = ""
	var DishViewMenuString = ""
	console.log(dish);



	// $.each(Dish, function (name, value) { 
	// 			var self = this;
	// 				$.each(this.ingredients, function (name, value)




	// 				});
	// 			});



	var DishViewContainer = function () {	


	DishViewContainerString += "<div class=\"col-sm-8 selector\"> <!-- whole selector area -->" +

			    "<div class=\"container\">" +

			    	"<div class=\"row\">" +


			    	 "<div class=\"col-sm-6 selector-method DishInfo\" id=\"Meatballs\">" +

						 	"<h2>" + dish.name + "</h2>" +
						 	"<img src=\"images/" + dish.image + "\"></img>" +
						 	"<p>" + dish.description + "</p>" +

						 
							"<a class=\"btn btn-group btn-group-md\" role=\"group\" id=\"DishBackToSelector\">" +
							"<type=\"button\" class=\"btn btn-default btn-custom\"> Back to Select Dish </a>" +
							
		
			    	
			    	"</div>" +



			    		"<div class=\"col-sm-6 selector-ingredients\">" +
			    			"<div class=\"col-sm-6\">" + 
			    				"<h3>" + dish.name + " " + "for</h3>" +

			    			"</div>" +


							"<div class=\"col-sm-6\">" +

			    				
			    				"<span class=\"input-group\">" + 
			    				"<br>" + 	
										"<h3>" + model.getNumberOfGuests() +"</h3>" +

								"</span>" +

			    			"</div>" +
			    			
	
						  	"<div class=\"recipe-lasagne\">" +

				    			 "<table class=\"table table-hover\">" +
				    			  
				    				"<th>Amount</th>" +
				    				"<th>Unit</th>" + 
				    				"<th>Item</th>" +
				    				"<th>Price</th>" + 
				    			  "<table class=\"table table-hover\" id=\"DishViewMenu\">" +

				    			  "</table>" +

				    			
				    				"<th></th>" +
				    				"<th></th>" +
				    				"<th></th>" +
				    				"<h3>Item total:" + "   " +  model.getTotalDishPrice(dishID)  + "  " + "SEK" +  "</h3>" +
				    				

				    				"<th></th>" +
				    				"<th></th>" +
				    				"<th></th>" +
				    				"<th>"  + "</th>" +
				    				
				    			
								"</table>" +



			    			"</div> <!-- end of lasagne recipe -->" +
			    			"<hr>" +
			    			
			    			"<div id=\"ConfirmButtonBox\">" +
							"<a class=\"btn-group btn-group-md\" role=\"group\" id=\"ConfirmDish\">" +
							"<type=\"button\" class=\"btn btn-default btn-custom\"> Confirm Dish </button>" +
							"</a>" +
							"</div>" +
   
						

						 	
							
		
			    	
			    		"</div>" +






			    	


						

			    	"</div>" +
			            
			"</div> <!-- selector menu keywords and accordion END -->" +


			

		"</div> <!-- selector area END -->"


		}
		DishViewContainer();



		var IngredientLooper = function () {
		
		$.each(dish.ingredients, function (name, value) { 
				self = this;
				// console.log(self);
				// console.log(value.quantity);
				
		
								DishViewMenuString += 	
								"<tr>" +
								"<td>" + model.getNumberOfGuests() * value.quantity + "</td>" +
								"<td>" + value.unit +  "</td>" +
								"<td>" + value.name +  "</td>" +
								"<td>" + model.getNumberOfGuests() * value.price +  "</td>" +
								"</tr>"


						
				});

		}

		IngredientLooper();



	this.update = function(arg) {

		// console.log(arg)


		if (arg === "guests") {

				
				
				DishViewContainerString = [];
				DishViewContainer();
				$("#DishViewContainer").html(DishViewContainerString);


				DishViewMenuString = [];
				IngredientLooper();
				$("#DishViewMenu").html(DishViewMenuString);





			}

		


		}


		$("#DishViewContainer").html(DishViewContainerString);
		$("#DishViewMenu").html(DishViewMenuString);
		this.BackToSelector = $("#DishBackToSelector");
		
		console.log(DishViewContainerString);
		console.log(DishViewMenuString);


}