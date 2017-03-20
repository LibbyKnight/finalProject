    angular
    .module('ucfCompanionApp.mainPage')
    .config(mainpageConfig);

function mainpageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
     $stateProvider.state({
        name: 'main', // name of the route
        url: '/main', // url endpoint for the route
        templateUrl: '/ucfCompanionApp/features/mainPage/mainPage.html', // The url to the view template
        controller: 'MainPageCtrl', // The name of the controller to use for this route
        controllerAs: 'MainPageVM' // The namespace for the view to access the view model
    })
}