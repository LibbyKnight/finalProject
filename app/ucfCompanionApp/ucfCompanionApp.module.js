angular
	.module('ucfCompanionApp', [
		'ui.router',
		'ucfCompanionApp.landingPage',
		'ucfCompanionApp.mainPage',
		'ucfCompanionApp.topicPage',
		'ucfCompanionApp.adminPage'

	])

	.config(ucfCompanionAppConfig);

function ucfCompanionAppConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}
