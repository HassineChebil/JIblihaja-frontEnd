angular.module('myApp',[
    'ui.router',
    'myApp.profile',
    'myApp.voyageur',
    'myApp.demand',
    'myApp.annonce',
    'myApp.access',
    'myApp.evaluation',
    'myApp.home'])
    .value('loggedUser',{})
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('comment-ca-marche', {
                url: '/comment-ca-marche',
                templateUrl: 'views/other/comment_ca_marche.html'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'views/other/about.html'
            });
        ;


        $urlRouterProvider.otherwise("/");

    });
