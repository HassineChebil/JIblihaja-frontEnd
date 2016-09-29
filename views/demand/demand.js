/**
 * Created by chiheb on 01/04/2016.
 */

angular.module('myApp.demand',['ui.router','ngResource'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('demand', {
                url: '/demand',
                templateUrl: 'views/demand/demand.html',
                controller: 'DemandCtrl'
            })
            .state('add-demand', {
                url: '/add-demand',
                templateUrl: 'views/demand/add-demand.html',
                controller: 'DemandCtrl'
            });
        $urlRouterProvider.otherwise("/");

    });
