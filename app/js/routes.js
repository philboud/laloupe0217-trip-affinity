angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/home',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'homeController'
                    }
                }
            })
            .state('anon.login', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.register', {
                url: '/register',
                views: {
                    'content@': {
                        templateUrl: 'anon/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'user/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            })
            .state('user.home', {
                url: '/home',
                views: {
                    'content@': {
                        templateUrl: 'user/home.html',
                        controller: 'homeController'
                    }
                }
            })
            .state('user.infoperso', {
                url: '/infoperso',
                views: {
                    'content@': {
                        templateUrl: 'user/infoPerso.html',
                        controller: 'InfopersoController'
                    }
                }
            })
            .state('user.rencontre', {
                url: '/rencontre',
                views: {
                    'content@': {
                        templateUrl: 'user/rencontre.html',
                        controller: 'RencontreController'
                    }
                }
            })
            .state('user.perso', {
                url: '/perso',
                views: {
                    'content@': {
                        templateUrl: 'user/perso.html',
                        controller: 'PersoController'
                    }
                }
            })
            .state('user.profile', {
                url: '/profile',
                views: {
                    'content@': {
                        templateUrl: 'user/profile.html',
                        controller: 'ProfileController'
                    }
                }
            })
            .state('user.persomen', {
                url: '/persomen',
                views: {
                    'content@': {
                        templateUrl: 'user/persomen.html',
                        controller: 'PersomenController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
