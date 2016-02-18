var SideBarView = function (container, model) {






	var SideBarString = "";
	var SideBarItemsString = "";
	var FullMenu = model.getFullMenu();
	var MenuTotal = model.getTotalMenuPrice();
	var numberOfGuests = model.getNumberOfGuests();
	
	
	

	
	$.each(FullMenu, function (name, value) { 
		var self = this;
		

				SideBarItemsString +=	"<tr>" +
								"<td>"  + self.name + "</td>" +
								"<td>" + "sap" +  "</td>" +
								"</tr>"

	
		
	});



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

						"<a class=\"btn-group btn-group-md btn-custom\" role=\"group\" id=\"ConfirmButton\" href=\"dinner_overview.html\">" +
						"<type=\"button\" class=\"btn btn-default btn-custom\"> Confirm dinner </button>" +
				
						"</a>" +


				"</div>" +
			"</div>" +
		//"</div>" +


		"<!-- end of sidelist-->"

		console.log(SideBarString);
		console.log(SideBarItemsString);
		$("#SideBar").html(SideBarString);
		$("#SideBarItems").html(SideBarItemsString);
		$("#numberOfGuests").val(numberOfGuests);
		$("#MenuTotal").val(MenuTotal);

	




}