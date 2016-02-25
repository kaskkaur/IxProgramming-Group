var StateController = function(model) {

	this.currentHomeView = new HomeView($("#HomeViewContainer"), model);
	
	this.currentHomeViewController = new HomeViewController(this.currentHomeView, model);




	this.changeMainView = function (view, viewController) {

		
		this.currentMainView = view;
		this.currentmaiconroller = viewcontroller;



		this.currentMainView.container.empty();
		


	}


}






