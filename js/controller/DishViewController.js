var DishViewController = function(view, model) {
	// console.log(DishBackToSelector)


	//Spinner ajax routine for Dish View
	$(document).ajaxStart(function () {
				// alert("ajaxstart");''
				
				$("#Meatballs").hide();
				$(".selector-ingredients").hide();
				
		       	$(".spinner").fadeIn("fast");
		        
		        
		        
		    }).ajaxStop(function () {

		    	$(".spinner").fadeOut("fast");

		        $("#Meatballs").show();
		        $(".selector-ingredients").show();

	});

	
	$("#DishViewContainer").on("click", "#DishBackToSelector", function () {

		// alert("GoBackToSelector");

		stateController.dishView.container.hide();
		stateController.sideBarView.container.show();
		stateController.dishSelectorView.container.show();

			

	});

	$("#DishViewContainer").on("click", "#DishConfirmDish", function () {

			model.addDishToMenu(model.currentID)


	});


	
	


	



}