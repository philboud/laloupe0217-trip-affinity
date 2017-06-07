angular.module('app')
  .controller('RegisterController', function($scope, Auth, $state, UserService, $timeout) {
    $scope.error = {
      pseudo: "This user allready exist!",
      email: "This email allready exist!"
    };
    $scope.verif = {};
    $scope.inputType = "password";
    var timer;

    function searchEmail() {
      timer = $timeout(function() {
        UserService.getEmail($scope.user.email).then(function(res) {
          $scope.verif = res.data;
        });
      }, 1500);
    }
    
    $scope.addEmail = function() {
      $timeout.cancel(timer);
      searchEmail();
    };

    $scope.showPassword = function() {
      if ($scope.inputType === "password") {
        $scope.inputType = "text";
      } else {
        $scope.inputType = "password";
      }
    };

    $scope.register = function() {
      Auth.register($scope.user).then(function(res){
        console.log(res);
      })
      .then($state.go("user.home"));

    };
  });
