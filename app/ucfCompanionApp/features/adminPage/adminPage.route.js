    angular
    .module('ucfCompanionApp.adminPage')
    .config(adminPageConfig);

function landingpageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
     $stateProvider.state({
        name: 'admin', // name of the route
        url: '/admin', // url endpoint for the route
        templateUrl: '/ucfCompanionApp/features/adminPage/adminPage.html', // The url to the view template
        controller: 'AdminPageCtrl', // The name of the controller to use for this route
        controllerAs: 'AdminPageVM' // The namespace for the view to access the view model
    })
}