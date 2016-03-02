var DishViewController = function(view, model) {
	console.log(DishBackToSelector)

	
	
	$("#DishViewContainer").on("click", "#DishBackToSelector", function () {

		// alert("GoBackToSelector");

		stateController.dishView.container.hide();
		stateController.sideBarView.container.show();
		stateController.dishSelectorView.container.show();

			
			

			});

	


		$("#DishViewContainer").on("click", "#DishConfirmDish", function () {


			// alert("ControllerAddedDIshTOMenu");
			

			model.addDishToMenu(model.currentID)


			
		

		

	});


	// $("#DishBackToSelector").on( "click", function() {


	// 			alert("onclickjquery");
		

	// 	stateController.dishView.container.hide();
	// 	stateController.sideBarView.container.show();
	// 	stateController.dishSelectorView.container.show();





	// });


	


	



}