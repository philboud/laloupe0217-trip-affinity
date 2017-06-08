angular.module('app')
    .factory('Profils', function() {

          var profils = [{
            pseudo: 'Coralie',
            image: '/img/coralie.jpg',
            country: 'Mali',
          },
          {
            pseudo: 'Anna',
            image: '/img/anna.jpg',
            country: 'canada',
          },
          {
            pseudo: 'Camille',
            image: '/img/camille.jpg',
            country: 'Antilles',
          },
          {
            pseudo: 'Cécile',
            image: '/img/cecile.jpg',
            country: 'Brezil',
          },
          {
            pseudo: 'Annick',
            image: '/img/lucie.jpg',
            country: 'Amerique',
          },
          {
            pseudo: 'Manon',
            image: '/img/nailletine.jpg',
            country: 'Japon',
          }];

          return profils;
    });
