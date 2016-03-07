var SideBarController = function(view, model) {


	
	console.log(view);


	view.plusGuest.click(function() {

		model.setNumberOfGuests(model.getNumberOfGuests() + 1);


	});


	view.minusGuest.click(function() {

		model.setNumberOfGuests(model.getNumberOfGuests() - 1);


	});


		ConfirmButton.onclick = function() {


	stateController.dishSelectorView.container.hide();
	stateController.dinnerOverview.container.show();
	stateController.sideBarView.container.hide();
	stateController.dishView.container.hide();
	

	}


	$("#SideBar").on("click", ".RemoveButton", function () {

		// alert("RemoveButtonController")

		id = this.id;
		dishID = id.substr(10).trim();
		console.log(dishID)

		model.removeDishFromMenu(dishID);
		// console.log(model.getFullMenu());


	});




}



	