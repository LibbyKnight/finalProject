angular
	.module('ucfCompanionApp.component.getVideo')
	.service('getVideo', GetVideoService);

function GetVideoService($http) {
    return {
        // getting all the videos from the router
        getTheVideo: function (getVideo) {
            $http.get('/api')
                .then(function (response) {
                    response.data.forEach(function(item) {
                        getVideo.push(item);
                    });
                });
        },

        // adding a new video via the router
        addVideo: function (category, videoName, videoLink, transcript) {
        	$http({
        		method: 'POST',
        		url: '/api',
        		data: {
        			category: category,
        			videoName: videoName,
                    videoLink: videoLink,
                    transcript: transcript
        		}
        	}).then(function (response) {
                // do nothing
            }).catch(function (error) {
                console.log('Error posting video.', error);
            });
        },

        // updating a video from complete to incomplete and vice versa
        // id is the video item id, and completed is a boolean true/false
        // for setting the status of the video
        // editVideo: function (id, completed) {
        //     $http({
        // 		method: 'PUT',
        // 		url: '/api',
        // 		data: {
        // 			_id: id,
        // 			isCompleted: completed
        // 		}
        // 	}).then(function (response) {
        //         //do nothing
        //     }).catch(function(error) {
        //         console.log('error putting', error);
        //     })
        // }
    };
}