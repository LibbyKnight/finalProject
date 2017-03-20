angular
	.module('ucfCompanionApp', [
		'ui.router',
		'ucfCompanionApp.langingPage',
		'ucfCompanionApp.mainPage',
		'ucfCompanionApp.topicPage',
		'ucfCompanionApp.adminPage'

	])

	.config(ucfCompanionAppConfig);

function ucfCompanionAppConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}
