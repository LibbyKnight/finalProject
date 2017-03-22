angular
	.module('ucfCompanionApp.component.navbar')
	.directive('navbar', Navbar);

function Navbar () {
	return {
		restrict: 'E',
		scope: {
			navbarData: '='
		},
		templateUrl: '/ucfCompanionApp/features/components/navbar/navbar.html',
		controller: NavbarCtrl,
		controllerAs: 'NavbarVM',
		bindToController: true
	}
}

function NavbarCtrl() {

}



    // <video width="120%" height="120%" controls style="float: right; margin-top: 200px; margin-right: -70%">

    //               <source src="../../layouts/assets/videos/angularjs.mp4" type="video/mp4">

    //             </video>