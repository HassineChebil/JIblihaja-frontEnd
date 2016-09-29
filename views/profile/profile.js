angular.module('myApp.profile',['ui.router','ngResource','ngFileUpload'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: 'views/profile/user-profile.html',
                controller: 'ProfileCtrl'
            })
            .state('profile-settings',{
                url: '/profile-setings',
                templateUrl: 'views/profile/user-profile-settings.html',
                controller: 'ProfileCtrl'
            })
            .state('profile-annonces',{
                url: '/profile-annonces',
                templateUrl: 'views/profile/user_profile_annonces.html'
            })
            .state('profile-messages',{
                url: '/profile-messages',
                templateUrl: 'views/profile/user_profile_messages.html'
            })
            .state('profile-bank',{
                url: '/profile-bank',
                templateUrl: 'views/profile/user_profile_bank.html'
            });


        $urlRouterProvider.otherwise("/");

    });
