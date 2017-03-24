angular
    .module('ucfCompanionApp.topicPage') 
    .controller('TopicPageCtrl', TopicPageCtrl);


function TopicPageCtrl(getVideo, $scope) {
    var vm = this;


    // set a variable to get the data from the db
    vm.videoInfo = [];

    // instructions
    vm.instructions = [];

    // use the getVideo service to get Video info from the database
    getVideo.getTheVideo(vm.videoInfo).then(function (response) {
        vm.videoInfo = response.data[0];
        vm.videoInfo.transcript = JSON.parse(response.data[0].transcript);
        console.log(vm.videoInfo);

        setInterval(function() {
            var video = $('video')[0];

            if (video.paused) return;

            console.log(video.currentTime);

            var keys = Object.keys(vm.videoInfo.transcript);

            for(var i = 0; i < keys.length; i++) {
                var time = keys[i];
                var transcript = vm.videoInfo.transcript[time];
                if (parseInt(time) > video.currentTime) {
                    var index = vm.instructions.indexOf(transcript);
                    if (index >= 0) {
                        vm.instructions.splice(index, 1);
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
        }, 250);
    });     

    vm.goToTime = function(time) {
        var video = $('video')[0];
        console.log(video);
        video.currentTime = parseInt(time);
    };
}
