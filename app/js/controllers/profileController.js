angular.module('app')
    .controller('ProfileController', function($scope, CurrentUser, CommunityService, UserService) {

        var userId = CurrentUser.user()._id;
        console.log( CurrentUser.user().pseudo);
              });

  
