angular.module('app')

    .controller('RencontreController', function($scope, Auth, UserService, CurrentUser, $state) {
        var userId = CurrentUser.user()._id;
        $scope.user = CurrentUser.user();

        $scope.sexe = '';

        $scope.genres = [
            'Man',
            'Woman'
        ];

        $scope.langues = [
          'English',
          'French',
          'Dutch',
          'Spanish',
          'Portuguese',
          'Indie'
        ];

        $scope.typeOfTravel = [
          'Chill',
          'Lux',
          'Backpack',
          'Sport',
          'Cultural',
          'Food',
          'Photography',
          'wildlife',
          'Party',
          'Mix',
          'Short time',
          'Long spend'

        ];
        $scope.list = true;
        console.log($scope.list);

        $scope.showList = function() {
          $scope.list = false;
          console.log($scope.list);
        };
    });
