angular
    .module('ucfCompanionApp.adminPage') 
    .controller('AdminPageCtrl', AdminPageCtrl);


function AdminPageCtrl(getVideo, $http, $scope) {
    var vm = this; 

    vm.transcripts = [{}];
	
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
	 	console.log('transcripts', vm.transcripts);
        getVideo.addVideo(vm.newVideo);
        resetView();
        
   	 	};


   	 $scope.addNewField = function () {
   	 		
   	 	vm.transcripts.push({});

		};

		
   	 };





