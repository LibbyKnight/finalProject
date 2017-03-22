angular
    .module('ucfCompanionApp.landingPage') // No array, as we are "extending" the module
    .controller('LandingPageCtrl', LandingPageCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)


function LandingPageCtrl($stateParams) {
    var vm = this; 
	
	vm.image = {
 		src:'/layouts/assets/images/ucf.jpg'
	} ; 	

};
