angular.module('app')


  .controller('MainController', function($scope, Auth, UserService, Profils) {

          $scope.profils = Profils;

          $scope.users = $scope.profils.map(function(name) {
                  var newname = name[pseudo];
                  return newname;

          });
          console.log($scope.users);
  });

  //
  // var tableauOrig = [{clé:1, valeur:10}, {clé:2, valeur:20}, {clé:3, valeur: 30}];
  // var tableauFormaté = tableauOrig.map(function(obj){
  //   var rObj = {};
  //   rObj[obj.clé] = obj.valeur;
  //   return rObj;
  // });
  // tableauFormaté vaut maintenant [{1:10}, {2:20}, {3:30}],
  // tableauOrig vaut toujours
  // [{clé:1, valeur:10},
  //  {clé:2, valeur:20},
  //  {clé:3, valeur: 30}
  // ]
