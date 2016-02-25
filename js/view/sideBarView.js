var SideBarView = function (container, model) {

	
	model.addObserver(this);




	var SideBarString = "";
	var SideBarItemsString = "";
	var FullMenu = model.getFullMenu();
	var MenuTotal = model.getTotalMenuPrice();
	var numberOfGuests = model.getNumberOfGuests();



	//var ItemPrice = model.getTotalDishPrice();
	
	
	

	 var DishLooper = function() {
	

	$.each(FullMenu, function (name, value) { 
		var self = this;
		id = value.id;
		console.log(id);
		

				SideBarItemsString +=	"<tr>" +
								"<td>" + "<a class=\"btn btn-default btn-group-xs glyphicon glyphicon-remove\" href=\"#\" id=\"" + "RemoveDish" + id + "\"></a>" + "</td>" +
								"<td>"  + self.name + "</td>" +
								"<td>" + model.getTotalDishPrice(id); +  "</td>" +


								"</tr>"

	
		
	});





  }

  DishLooper();


	SideBarString +=

	 "<!-- start of sidelist-->" +
			 //"<div class=\"row main\">" +
			    "<div class=\"col-md-4 sidelist\">" +
						"<div id=\"guests\">" +
								"<p> My dinner</p>" +
		
							"<span>" +
								"<div class=\"input-group\">" + 
								  "<span class=\"input-group-addon\">#</span>" +
								  "<input  type=\"text\" class=\"form-control\" aria-label=\"Amount\" id=\"numberOfGuests\">" +
								
								  "<span class=\"input-group-addon\">People</span>" +
								"</div>" +
							"</span>" +

							"<div class=\"quantity\" value=\"0\">" +
				          		"<button id=\"minusGuest\" class=\"btn btn-custom-color button-increment\"><span class=\"glyphicon glyphicon-minus\"></span></button>" +
								"<button id=\"plusGuest\" class=\"btn btn-custom-color button-increment\"><span class=\"glyphicon glyphicon-plus\"></span></button>" +
							"</div>" +


						"</div> <!-- end of 1st \"my dinner guests\" block on the left -->" +

					"<div class=\"ShoppingList\">" +
						"<span id=\"FullMenu\"></span>" +
						"<table class=\"table table-hover\" style=\"width:100%\" id=\"\">" +
							  
							  "<tr>"+
							  	"<th> Item </th>" +
							  	"<th> Price SEK </th>" +
						"</table>" +

						"<table class=\"table table-hover\" style=\"width:100%\"  id=\"SideBarItems\">" +
							    
							  
						"</table>" +
					"</div>" +


				"<div class=\"total\">" +
						"<div class=\"input-group\">" +
							   "<span id=\"\" class=\"input-group-addon TotalColor\">Total</span>" +
							  "<input  id=\"MenuTotal\" type=\"text\" class=\"form-control\" aria-label=\"Amount\">" +
							   "<span class=\"input-group-addon TotalColor\">SEK</span>" +

						"</div>" +

						"<a class=\"btn-group btn-group-md btn-custom\" role=\"group\" id=\"ConfirmButton\" href=\"\">" +
						"<type=\"button\" class=\"btn btn-default btn-custom\"> Confirm dinner </button>" +
				
						"</a>" +


				"</div>" +
			"</div>" +
		//"</div>" +


		"<!-- end of sidelist-->"



		

		this.update = function(arg) {

			console.log(arg);


			if (arg === "guests") {
				console.log(model.getNumberOfGuests())


				

				$("#numberOfGuests").val(model.getNumberOfGuests());
				$("#MenuTotal").val(model.getTotalMenuPrice());
				
				SideBarItemsString = [];
				DishLooper();
				$("#SideBarItems").html(SideBarItemsString);



			}


		}


		console.log(numberOfGuests);
		



	
		$("#SideBar").html(SideBarString);
		$("#SideBarItems").html(SideBarItemsString);
		$("#MenuTotal").val(MenuTotal);
		
		
		this.minusGuest = $("#minusGuest");
		this.plusGuest = $("#plusGuest");
		this.SidebarConfirmDinner = $("#ConfirmButton")
 
	




}