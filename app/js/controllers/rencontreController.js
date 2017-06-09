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
$scope.list1 = true;
$scope.list2 = true;
$scope.list3 = true;
$scope.list4 = true;

$scope.risk = function () {
    $scope.list = true;
  $scope.list1 = true;
  $scope.list2 = true;
  $scope.list3 = true;
  $scope.list4 = true;

var arr=  Math.floor((Math.random() * 4) + 1);

if (arr ===1) {
  $scope.list1 = false;
}
if (arr ===2) {
  $scope.list2 = false;
}
if (arr ===3) {
  $scope.list3 = false;
}
if (arr ===4) {
  $scope.list4 = false;
}

};


    });
