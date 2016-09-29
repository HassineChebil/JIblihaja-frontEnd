/**
 * Created by hassine on 4/5/2016.
 */
angular.module('myApp.access',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('loginRegister', {
                url: '/loginRegister',
                templateUrl: 'views/access/login-register.html',
                controller: 'AccessCtrl'
            });


        $urlRouterProvider.otherwise("/");

    });