angular.module('app')

    .controller('PersoController', function($scope, Auth, UserService, CurrentUser, $state) {
        var userId = CurrentUser.user()._id;
        $scope.user = CurrentUser.user();


        var i = 1;
        console.log(i);
        $scope.nextCarnet = function() {
          console.log("coucou");
          i++;
          $scope.currentImage = "/img/carnet"+i+".jpg";

                console.log(i);
                if (i > 4) {
                  i = 1;
                  $scope.currentImage = "/img/carnet"+i+".jpg";

            }
        };
        $scope.prevCarnet = function() {
          i--;
          $scope.currentImage = "/img/carnet"+i+".jpg";

          console.log(i);
            if (i < 1) {
              i = 5;
              $scope.currentImage = "/img/carnet"+i+".jpg";

            }
        };

        $scope.currentImage = "/img/carnet"+i+".jpg";
          // $scope.currentImage = $scope.images[i];
    });
