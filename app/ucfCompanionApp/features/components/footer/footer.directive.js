angular
	.module('ucfCompanionApp.component.footer')
	.directive('footer', Footer);

function Footer () {
	return {
		restrict: 'E',
		scope: {
			footerData: '='
		},
		templateUrl: '/ucfCompanionApp/features/components/footer/footer.html',
		controller: FooterCtrl,
		controllerAs: 'FooterVM',
		bindToController: true
	}
}

function FooterCtrl() {

}
