angular
    .module('ucfCompanionApp.topicPage') // No array, as we are "extending" the module
    .controller('TopicPageCtrl', TopicPageCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)


function TopicPageCtrl(getVideo, $scope) {
  
	var vm = this;

	// set a variable to stare the data from the db
	vm.videoInfo = [];

	// instructions
	vm.instructions = [];

	var creatingState;
	// use the getVideo service to get all our getVideo from the database
	getVideo.getTheVideo(vm.videoInfo).then(function (response) {
        vm.videoInfo = response.data[0];
        vm.videoInfo.transcript = JSON.parse(response.data[0].transcript);
        console.log(vm.videoInfo);

		var x = setInterval(function() {
			var video = $('video')[0];

			if (video.paused) return;

			console.log(video.currentTime);

			var keys = Object.keys(vm.videoInfo.transcript);
			console.log(keys, "keys");

			for(var i = 0; i < keys.length; i++) {
				var time = keys[i];
				console.log(time, "time");
				var transcript = vm.videoInfo.transcript[time];
				$scope.$apply();
				if (parseInt(time) > video.currentTime) {
					if (vm.instructions.indexOf(transcript) > 0) {
						vm.instructions = [];
						$scope.$apply();
						break;
					}
					
				}

				if (parseInt(time) <= video.currentTime) {
					if (vm.instructions.indexOf(transcript) < 0) {
						vm.instructions.push(transcript);
						$scope.$apply();
						break;						
					}

				}
			}

			var creatingState = keys[0];
    	console.log(creatingState, "STATE");


			// if (vm.videoInfo.transcript)
			// if (vm.videoInfo.transcript[x[0].currentTime]) {
			// 	console.log(vm.videoInfo.transcript[x[0].currentTime]);
			// }
		}, 250);
    });		

    		vm.goToTime = function(time) {
		      console.log(time, "TIMEEEEE");
		        
		   	 	};

    	

}
