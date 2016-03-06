var DinnerOverviewController = function(view, model) {


	BackToSelector.onclick = function() {

	

	stateController.dinnerOverview.container.hide();
	stateController.sideBarView.container.show();
	stateController.dishSelectorView.container.show();

	}



	PrintFullRecipe.onclick = function() {

	

	stateController.dinnerOverview.container.hide();
	
	stateController.dinnerPreparationView.container.show();

	}


}