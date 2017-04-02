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

