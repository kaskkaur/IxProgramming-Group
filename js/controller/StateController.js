var StateController = function(model) {

	
	//alert("SUP");

	this.homeView = new HomeView($("#HomeViewContainer"), model);
	
	this.homeViewController = new HomeViewController(this.homeView, model);


	this.dinnerPreparationView = new DinnerPreparationView($("#PreparationViewContainer"), model);
	this.dinnerPreparationController = new DinnerPreparationController(this.dinnerPreparationView, model);
	
	
	
	this.sideBarView = new SideBarView($("#SideBar"), model);
	this.sideBarController = new SideBarController(this.sideBarView, model);

	this.dinnerOverview = new DinnerOverview($("#OverviewContainer"), model);
	this.dinnerOverviewController = new DinnerOverviewController(this.dinnerOverview, model);

	this.dishView = new DishView($("#DishViewContainer"), model);
	this.dishViewController = new DishViewController(this.dishView, model);

	this.dishSelectorView = new DishSelectorView($("#DishSelectorContainer"), model);
	this.dishSelectorController = new DishSelectorController(this.dishSelectorView, model);





	this.dinnerPreparationView.container.hide();
	this.dishSelectorView.container.hide();
	this.sideBarView.container.hide();
	this.dinnerOverview.container.hide();
	this.dishView.container.hide();




	// this.changeMainView = function (view, viewController) {

		
	// 	this.currentMainView = view;
	// 	this.currentmaiconroller = viewcontroller;



	// 	this.currentMainView.container.empty();
		


	// }


}






