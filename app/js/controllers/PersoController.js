angular.module('app')

    .controller('PersoController', function($scope, Auth, UserService, CurrentUser, $state) {
        var userId = CurrentUser.user()._id;
        $scope.user = CurrentUser.user();


        var i = 1;
        console.log(i);
        $scope.nextCarnet = function() {
            if (i < 6) {
                i++;
            }
            i = 1;
        };
        $scope.prevCarnet = function() {
            if (i > 0) {
                i--;
            }
            i = 5;
        };

        // $scope.images = [
        //   "/img/carnet1.jpeg",
        //
        // ]
        // $scope.image = "/img/carnet" i ".jpeg";
    });
