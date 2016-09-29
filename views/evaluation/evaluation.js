angular.module('myApp.evaluation',['ui.router','ngResource'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('evaluation', {
                url: '/evaluation/:user/:type/:state',
                templateUrl: 'views/evaluation/evaluation.html',
                controller:'EvaluationCtrl'
            });


        $urlRouterProvider.otherwise("/");

    });/**
 * Created by hassine on 4/9/2016.
 */
