angular
    .module('ucfCompanionApp.landingPage') // No array, as we are "extending" the module
    .controller('LandingPageCtrl', LandingPageCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)


function LandingPageCtrl($stateParams) {
    var vm = this; 
	
	 	passport.use(new GitHubStrategy({

    clientID: GITHUB_CLIENT_ID,

    clientSecret: GITHUB_CLIENT_SECRET,

    callbackURL: "http://127.0.0.1:3000/auth/github/callback"

  },

  function(accessToken, refreshToken, profile, done) {

    User.findOrCreate({ githubId: profile.id }, function (err, user) {

      return done(err, user);

    });

  }

));

};
