angular.module('app')
    .factory('Profils', function() {

          var profils = [{
            pseudo: 'Coralie',
            image: '/img/coralie.jpg'
          },
          {
            pseudo: 'Anna',
            image: '/img/anna.jpg'
          },
          {
            pseudo: 'Camille',
            image: '/img/camille.jpg'
          },
          {
            pseudo: 'Cécile',
            image: '/img/cecile.jpg'
          },
          {
            pseudo: 'Lucie',
            image: '/img/lucie.jpg'
          },
          {
            pseudo: 'Nailletine',
            image: '/img/nailletine.jpg'
          }];

          return profils;
    });
