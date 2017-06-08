angular.module('app')
    .factory('Profils', function() {

          var profils = [{
            pseudo: 'Coralie',
            image: '/img/Coralie.jpg',
            country: 'Mali',
          },
          {
            pseudo: 'Anna',
            image: '/img/Anna.jpg',
            country: 'canada',
          },
          {
            pseudo: 'Camille',
            image: '/img/Camille.jpg',
            country: 'Antilles',
          },
          {
            pseudo: 'Cecile',
            image: '/img/Cecile.jpg',
            country: 'Brezil',
          },
          {
            pseudo: 'Annick',
            image: '/img/Annick.jpg',
            country: 'Amerique',
          },
          {
            pseudo: 'Manon',
            image: '/img/Manon.jpg',
            country: 'Japon',
          }];

          return profils;
    });
