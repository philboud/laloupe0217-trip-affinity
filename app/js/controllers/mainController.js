angular.module('app')

  .controller('MainController', function($scope, Auth, $timeout, $mdSidenav, UserService, CurrentUser, $log, $state, $window) {
    var userId = CurrentUser.user()._id;
    $scope.user = CurrentUser.user();
  });
