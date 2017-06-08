angular.module('app')


    .controller('homeController', function($scope, Auth, UserService, Profils, $state) {

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
  $scope.chat = true;
  $scope.goToProfil = function () {
    $state.go('user.perso');
  };

$scope.openChat = function(){
  $scope.chat = false;
};

$scope.closeChat = function(){
  $scope.chat = true;
};


$scope.profilUser = function(user){
  console.log(user);
};

$scope.message="";

$scope.send = function(){
  console.log($scope.message);
  $scope.message="";
};

    });
