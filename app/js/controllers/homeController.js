angular.module('app')


    .controller('homeController', function($scope, Auth, UserService, Profils) {

        $scope.profils = Profils;
        console.log($scope.profils);
        $scope.users = [];
        $scope.profils.forEach(function(element) {
            console.log(element);
            $scope.users.push(element.pseudo);
            console.log('  $scope.users', $scope.users);
        });

    });
