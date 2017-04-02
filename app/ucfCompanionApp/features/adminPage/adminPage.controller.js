angular
    .module('ucfCompanionApp.adminPage') 
    .controller('AdminPageCtrl', AdminPageCtrl);


function AdminPageCtrl(getVideo, $http) {
    var vm = this; 

    vm.transcripts = [{}];
	
/*	vm.addVideo = function() {



		getVideo.addVideo({
			category: vm.getVideo.category,
			videoName: vm.getVideo.videoName, 
			videoLink: vm.getVideo.videoLink, 
			transcript: dbTranscripts
		});


	};*/


	 vm.AddNewVideo = function() {
	 	var dbTranscripts = {};

		for (var i = 0; i < vm.transcripts.length; i++) {
			var time = vm.transcripts[i].time;
			var text = vm.transcripts[i].text;
				dbTranscripts[time] = text;
		}

		console.log(dbTranscripts);

        getVideo.addVideo({
			category: vm.newVideo.category,
			videoName: vm.newVideo.videoName, 
			videoLink: vm.newVideo.videoLink, 
			transcript: dbTranscripts
		});
        // resetView();
        // addVideo();
        
   	 	};


   	 vm.addNewField = function () {
   	 		
   	 	vm.transcripts.push({});

		};

		
   	 };





