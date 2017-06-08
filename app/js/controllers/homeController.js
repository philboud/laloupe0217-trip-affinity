angular.module('app')


    .controller('homeController', function($scope, Auth, UserService, Profils) {

        $scope.profils = Profils;
        console.log($scope.profils);
        $scope.users = [];
        $scope.countrys = [];
        $scope.profils.forEach(function(element) {
            console.log(element);
            $scope.users.push(element.pseudo);
            $scope.countrys.push(element.country);
            console.log('  $scope.countrys', $scope.countrys);
        });

$scope.profilUser = function(user){
  console.log(user);
};

    });
