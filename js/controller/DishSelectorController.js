var DishSelectorController = function (view, model) {


		


		view.DishInfoButton.click(function(){
     
     	var id = this.id;

		console.log(id);

		model.getDish(id);

		console.log(model.getDish(id));



		// stateController.dishView.id = id;

		stateController.dishView.container.show();
		
		stateController.sideBarView.container.show();

		stateController.dishSelectorView.container.hide();

		

	});

	

}