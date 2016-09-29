angular.module('myApp.voyageur',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('voyageur', {
                url: '/voyageur-list',
                templateUrl: 'views/voyageur/list-voyageurs.html'
            })
            .state('voyageur-details',{
                url: '/voyageur-details',
                templateUrl: 'views/voyageur/details-voyageur.html'
            });


        $urlRouterProvider.otherwise("/");

    });
