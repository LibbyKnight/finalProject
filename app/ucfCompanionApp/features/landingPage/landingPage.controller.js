angular
    .module('ucfCompanionApp.landingPage') // No array, as we are "extending" the module
    .controller('LandingPageCtrl', LandingPageCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)


function LandingPageCtrl($stateParams) {
    var vm = this; // vm stands for View Model - anything on "the vm" is exposed to the view
	
	vm.story = {
		// heroName: $stateParams.heroName,
		// heroGender: $stateParams.heroGender,
		// heroCity: $stateParams.heroCity,
		// heroFights: $stateParams.heroFights,
		// heroFightOutcome: $stateParams.heroFightOutcome
	}  	

}
