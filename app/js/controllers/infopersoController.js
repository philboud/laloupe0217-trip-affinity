angular.module('app')
    .controller('InfopersoController', function($scope, CurrentUser, UserService, $state) {

        var userId = CurrentUser.user()._id;
        console.log(CurrentUser.user());



        $scope.genres = [
              'Homme',
              'Femme'
          ];

        $scope.infoperso = {};

        $scope.valide = function() {
            var infopersos = {
                nom: $scope.nom,
                prenom: $scope.prenom,
                sexe: $scope.sexe,
                pseudo: $scope.pseudo,
                complement: $scope.complement,
                photo: $scope.photo
            };
            $scope.infoperso = (infopersos);
            console.log($scope.infoperso);
            console.log(userId);
            UserService.update(userId,infopersos).then(function(res) {});
            $state.go('user.persomen');
        };


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
        });
