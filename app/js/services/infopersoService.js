angular.module('app')
    .service('InfopersoService', function($http, LocalService) {
        return {

          create: function(infopersos) {
             return $http.post('/infopersos/',infopersos);
         },
            getAll: function() {
                return $http.get('/infopersos');
            },
            getOne: function(id) {
                return $http.get('/infopersos/' + id);
            },
            update: function(id, user) {
                return $http.put('/infopersos/' + id, user);
            },
            delete: function(id) {
                return $http.delete('/infopersos/' + id);
            }
        };
    });
