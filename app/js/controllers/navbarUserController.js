angular.module('app')
  .controller('NavbarUserController', function($scope, Auth, CurrentUser, $timeout, $mdSidenav, $state, $rootScope) {
    $rootScope.$on('$viewContentLoaded',
      function(event) {
    });
    $(".button-collapse").sideNav();
      });
