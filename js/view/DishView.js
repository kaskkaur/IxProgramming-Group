var DishView = function (container, model) {

	model.addObserver(this);
	this.container = container;





	//var DishTotal = model.getTotalDishPrice(1);

	var dish = model.getDish(1);
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


	DishViewContainerString += "<div class=\"col-md-8 selector\"> <!-- whole selector area -->" +

			    	"<div class=\"row\">" +

			    		"<div class=\"col-lg-6 selector-ingredients\">" +
			    			"<div class=\"col-lg-6\">" + 
			    				"<h3>" + dish.name + " " + "for</h3>" +

			    			"</div>" +


							"<div class=\"col-lg-6\">" +

			    				
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
				    				"<h3>Item total:" + "   " +  model.getTotalDishPrice(1)  + "  " + "SEK" +  "</h3>" +
				    				

				    				"<th></th>" +
				    				"<th></th>" +
				    				"<th></th>" +
				    				"<th>"  + "</th>" +
				    				
				    			
								"</table>" +



			    			"</div> <!-- end of lasagne recipe -->" +
			    			"<hr>" +
			    			"<div id=\"ConfirmButtonBox\">" +
							"<a class=\"btn-group btn-group-md\" role=\"group\" id=\"ConfirmDish\" href=\"dinner_overview.html\">" +
							"<type=\"button\" class=\"btn btn-default btn-custom\"> Confirm Dish </button>" +
							"</a>" +
   
						 "</div><!-- /.col-lg-6 -->" +






			    		"</div>" +


						 "<div class=\"col-lg-6 selector-method\" id=\"Meatballs\">" +

						 	"<h2>" + dish.name + "</h2>" +
						 	"<img src=\"images/" + dish.image + "\"></img>" +
						 	"<p>" + dish.description + "</p>" +

						 
							"<a class=\"btn btn-group btn-group-md\" role=\"group\" id=\"BackToSelector\" href=\"select.html\">" +
							"<type=\"button\" class=\"btn btn-default btn-custom\"> Back to Select Dish </a>" +
							
		
			    	
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
		
		console.log(DishViewContainerString);
		console.log(DishViewMenuString);


}