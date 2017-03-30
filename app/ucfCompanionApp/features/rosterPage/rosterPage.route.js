    angular
    .module('ucfCompanionApp.rosterPage')
    .config(rosterPageConfig);

function rosterPageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
     $stateProvider.state({
        name: 'roster', // name of the route
        url: '/roster', // url endpoint for the route
        templateUrl: '/features/rosterPage/rosterPage.html', // The url to the view template
        controller: 'RosterPageCtrl', // The name of the controller to use for this route
        controllerAs: 'RosterPageVM' // The namespace for the view to access the view model
    })
}