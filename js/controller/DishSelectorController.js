var DishSelectorController = function (view, model) {


// Initite the spinner routine
		$(document).ajaxStart(function () {
				// alert("ajaxstart");''
				$(".spinner").fadeIn("fast");
				
				$("#SelectorDishes").hide();
		       	
		        
		        
		        
		    }).ajaxStop(function () {

		    	$(".spinner").fadeOut("fast");

		        $("#SelectorDishes").show();

		});



		// Controller to enter DishView with the ID of the dish clicked
		$("#DishSelectorContainer").on("click", ".DishInfoButton", function () {

			var id = this.id;
		
			model.currentID = id;
		
			model.getDishData(id);


			console.log(id + "thisIsThecurrentID");

		stateController.dishView.container.show();

		stateController.dishSelectorView.container.hide();


		});


		// Controller to get dishes when a type is selected from the dropdown
		view.FilterMenu.change(function() {

			arg = view.FilterMenu.val()

			model.DishType = arg;

			model.getAllDishes(arg);


		});


		//Get dishes when the search icon is clicked
		
		$("#SearchButton").on("click",  function() {


			value = $("#FilterSearch").val()
			

			model.SearchString = value;
			model.getSearchString();
			model.getAllDishes(model.DishType, value);
			


		});

		//Get dishes when enter is pressed
		$('#FilterSearch').keypress(function (e) {
			
			  if (e.which == 13) {
			  	// alert("enter");
			
			value = $("#FilterSearch").val()
			

			model.SearchString = value;
			model.getSearchString();
			model.getAllDishes(model.DishType, value);
			return false;
			   
			  }
		});

	

}