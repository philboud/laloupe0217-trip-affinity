angular.module('app')
  .service('UserService', function($http, LocalService) {
    return {
      getAll: function() {
        return $http.get('/users');
      },
      getOne: function(id) {
        return $http.get('/users/' + id);
      },
      getPseudo: function(pseudo) {
        return $http.get('/users/pseudo/' + pseudo);
      },
      getEmail: function(email) {
        return $http.get('/users/mail/' + email);
      },
      update: function(id,user) {
        return $http.put('/users/' + id, user);
      },
      delete: function(id) {
        return $http.delete('/users/' + id);
      }
    };
  });
