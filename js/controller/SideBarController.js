var SideBarController = function(view, model) {


	
	console.log(view);


	view.plusGuest.click(function() {

		model.setNumberOfGuests(1);


	});


	view.minusGuest.click(function() {

		model.setNumberOfGuests(0);


	});


	






		ConfirmButton.onclick = function() {


	stateController.dishSelectorView.container.hide();
	stateController.dinnerOverview.container.show();
	stateController.sideBarView.container.hide();
	

	}




}



	