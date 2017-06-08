angular.module('app')
    .controller('InfopersoController', function($scope, CurrentUser, UserService, InfopersoService) {

        var userId = CurrentUser.user()._id;
        console.log( CurrentUser.user().pseudo);

$scope.nom='';
$scope.prenom ='';
$scope.sexe='';
$scope.pseudo='';
$scope.complement='';
$scope.photo='';

$scope.infoperso =[];
$scope.valide = function() {
var infopersos={
  nom:$scope.nom,
  prenom:$scope.prenom,
  sexe:$scope.sexe,
  pseudo:$scope.pseudo,
  complement:$scope.complement,
  photo:$scope.photo
};
$scope.infoperso.push(infopersos);
           console.log($scope.infoperso);
           InfopersoService.create(infopersos).then(function(res) {
           });
         };
       });
