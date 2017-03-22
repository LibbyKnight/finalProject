    angular
    .module('ucfCompanionApp.landingPage')
    .config(landingPageConfig);

function landingPageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
     $stateProvider.state({
        name: 'landing', // name of the route
        url: '/', // url endpoint for the route
        templateUrl: '/features/landingPage/landingPage.html', // The url to the view template
        controller: 'LandingPageCtrl', // The name of the controller to use for this route
        controllerAs: 'LandingPageVM' // The namespace for the view to access the view model
    })
}