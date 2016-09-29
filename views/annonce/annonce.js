angular.module('myApp.annonce',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('annonce', {
                url: '/annonce-list',
                templateUrl: 'views/annonce/Liste-annonces.html',
                controller: 'AnnonceController'
            });


        $urlRouterProvider.otherwise("/");

    });
