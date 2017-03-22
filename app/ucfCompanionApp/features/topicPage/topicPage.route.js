    angular
    .module('ucfCompanionApp.topicPage')
    .config(topicpageConfig);

function topicpageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
     $stateProvider.state({
        name: 'topic', // name of the route
        url: '/topic', // url endpoint for the route
        templateUrl: '/features/topicPage/topicPage.html', // The url to the view template
        controller: 'TopicPageCtrl', // The name of the controller to use for this route
        controllerAs: 'TopicPageVM' // The namespace for the view to access the view model
    })
}