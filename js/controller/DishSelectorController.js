var DishSelectorController = function (view, model) {



		view.DishInfoButton.click(function(){

			
	     	var id = this.id;
		
			model.currentID = id;

			console.log(model.currentID);
			model.notifyObservers("ID");


	

		stateController.dishView.container.show();
		
		// stateController.sideBarView.container.show();

		stateController.dishSelectorView.container.hide();

		

	});

		
		
		view.FilterMenu.change(function() {
			//alert("sap");


			value = view.FilterMenu.val()

			// view.update(value);

			model.DishType = value;
			//model.getAllDishes(value);
			console.log(model.DishType);
			model.notifyObservers("TypeChange");



		});

		// view.FilterSearch.change(function() {
		// 	// alert("sap");

		// 	value = view.FilterSearch.val()

		// 	// view.update(value);

		// 	model.DishType = value;

		// 	console.log(model.DishType);
		// 	model.notifyObservers("TypeChange");



		// });

	

}