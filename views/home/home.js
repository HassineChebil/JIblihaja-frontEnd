angular.module('myApp.home',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home/home.html',
                controller : 'HomeCtrl'
            });


        $urlRouterProvider.otherwise("/");

    })
    .controller('HomeCtrl',HomeCtrl);


HomeCtrl.$inject = ['Profile','$scope'];


function HomeCtrl(Profile,$scope){
    $scope.seekers = [];
    $scope.travelers = [];
        Profile.get5firstSeekers().$promise.then(function (seekers) {

            $scope.seekers = seekers;
        });
        Profile.get5firstTravelers().$promise.then(function (travelers) {

            $scope.travelers = travelers;
        });

}
