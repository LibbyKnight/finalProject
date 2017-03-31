angular
	.module('ucfCompanionApp', [
		'ui.router',
		// 'ucfCompanionApp.landingPage',
		'ucfCompanionApp.mainPage',
		'ucfCompanionApp.topicPage',
		'ucfCompanionApp.adminPage',
		'ucfCompanionApp.rosterPage',
		'ucfCompanionApp.landingPage',



	])

	.config(ucfCompanionAppConfig);

function ucfCompanionAppConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/main');
}
