angular
    .module('ucfCompanionApp.adminPage') 
    .controller('AdminPageCtrl', AdminPageCtrl);


function AdminPageCtrl(getVideo, $http, $scope) {
    var vm = this; 
	
	$scope.fields = [{id: 'field1'}];
	vm.addVideo = function() {

		getVideo.addVideo(vm.getVideo.category, vm.getVideo.videoName, vm.getVideo.videoLink, vm.getVideo.trancript);

		vm.newVideo = {

			catergory: '',
			videoName: '',
			videoLink: '',
			trancript: ''

		};

	};

function resetView() {

    vm.addVideo= {

 		    catergory: '',
			videoName: '',
			videoLink: '',
			trancript: ''
    };

};

	 vm.AddNewVideo = function() {
        getVideo.addVideo(vm.newVideo);
        resetView();
        
   	 	};


   	 $scope.addNewField = function () {
   	 		
   	 	var newField = $scope.fields.length+1;

  		$scope.fields.push({'id':'field'+newField});

		};

		
   	 };





