var DishViewController = function(view, model) {
	console.log(DishBackToSelector)

	
	


	DishConfirmDish.onclick = function(){

		alert("sapcontrol");
			

			model.addDishToMenu(model.currentID)

			

			};

	


		DishBackToSelector.onclick = function() {

			alert("sap");
		

		stateController.dishView.container.hide();
		stateController.sideBarView.container.show();
		stateController.dishSelectorView.container.show();

	}


	// $("#DishBackToSelector").on( "click", function() {


	// 			alert("onclickjquery");
		

	// 	stateController.dishView.container.hide();
	// 	stateController.sideBarView.container.show();
	// 	stateController.dishSelectorView.container.show();





	// });


	


	



}