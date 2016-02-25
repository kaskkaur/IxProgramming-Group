var HomeView = function (container, model) {

	model.addObserver(this);



		var HomeViewString = "";




HomeViewString +=


	 "<div class=\"jumbotron\">" +

		"<div class=\"panel panel-default jumbopanel\">" + 

			"<h2> A home dinner service </h2>" +
			"<h3 class=\"slogan\"> From the best chefs in the world directly into your kitchen </h3>" +
			"<hr>" +
			"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" +
			"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" +
						"quis .</p>" +

			"<a class=\"btn btn-group btn-group-lg  center-block pull-right\" role=\"group\" id=\"BackToSelector\" href=\"select.html\">" +
							"<type=\"button\" class=\"btn btn-default btn-custom\"> Start planning now </a>" + 


			


		"</div>" +

			


	"</div>"




	this.container = container;


		this.update = function(arg) {


			


		}





	$("#HomeViewContainer").html(HomeViewString);

}