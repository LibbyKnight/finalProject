angular
    .module('ucfCompanionApp.topicPage') // No array, as we are "extending" the module
    .controller('TopicPageCtrl', TopicPageCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)


function TopicPageCtrl(getVideo) {
  
	var vm = this;

	// set a variable to stare the data from the db
	vm.videoInfo = [];

	// use the makeTheDate function to get a date w/o time component
	// vm.currentDate = makeTheDate();

	// use the getVideo service to get all our getVideo from the database
	getVideo.getTheVideo(vm.videoInfo).then(function (response) {
        vm.videoInfo = response.data;
    });

	// when user clicks task comleted on the list state, use the getVideo
	// service to change the status of isCompleted to true
	// send the id, and the status we want to update it to
	// vm.updatedStatus = function(id) {
	// 	// console.log(id);
	// 	getVideo.editVideo(id, true);
	// }

	// function for getting the current date w/o the time component
	// function makeTheDate() {
	// 	var fullCurrentDate = new Date();
	// 	// get rid of the hours part of the date
	// 	fullCurrentDate.setHours(0, 0, 0, 0);
	// 	return fullCurrentDate;
	// }  	

}
