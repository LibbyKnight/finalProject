angular
	.module('ucfCompanionApp.component.getVideo')
	.service('getVideo', GetVideoService);

function GetVideoService($http) {
    return {
        // getting all the videos from the router
        getTheVideo: function (getVideo) {
             return $http.get('/api');
        },

        // adding a new video via the router
        addVideo: function (newVideo) {
        	$http({
        		method: 'POST',
        		url: '/api',
        		data: newVideo
        	}).then(function (response) {
                // do nothing
            }).catch(function (error) {
                console.log('Error posting video.', error);
            });
        },

        // updating a video

        // editVideo: function (id) {
        //     $http({
        // 		method: 'PUT',
        // 		url: '/api',
        // 		data: {
        // 			_id: id,
        // 			
        // 		}
        // 	}).then(function (response) {
        //         //do nothing
        //     }).catch(function(error) {
        //         console.log('error putting', error);
        //     })
        // }
    };
}