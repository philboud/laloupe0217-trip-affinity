angular.module('app')

    .controller('PersoController', function($scope, Auth, UserService, CurrentUser, $state) {
        var userId = CurrentUser.user()._id;
        $scope.user = CurrentUser.user();

$(function(){ $('.carousel.carousel-slider').carousel({full_width: true}); });
    });
