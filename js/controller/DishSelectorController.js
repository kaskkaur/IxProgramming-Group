var DishSelectorController = function (view, model) {



		$("#DishSelectorContainer").on("click", ".DishInfoButton", function () {

			// view.DishInfoButton
			// alert("SAPselector");
			
	     	var id = this.id;
		
			model.currentID = id;
			// alert("SAPselector");
			



			console.log(model.currentID + "thisIsThecurrentID");
			// model.notifyObservers("ID");

			

		model.getDishID();

		stateController.dishView.container.show();
		
		// stateController.sideBarView.container.show();

		stateController.dishSelectorView.container.hide();

		

	});

		
		
		view.FilterMenu.change(function() {
			//alert("sap");


			arg = view.FilterMenu.val()

			// view.update(value);

			model.DishType = arg;
			// model.getAllDishes(value);
			model.getDishType();			



		});

		
		$("#FilterSearch").on("keyup",  function() {
			// alert("enterSearch");

			value = $(this).val()
			console.log(value);

			// view.update(value);

			model.SearchString = value;
			model.getSearchString();

			console.log(model.SearchString);
			




		});

	

}