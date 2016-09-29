/**
 * Created by hassine on 4/10/2016.
 */
angular.module('myApp.evaluation')
    .controller('EvaluationCtrl', EvaluationCtrl);

EvaluationCtrl.$inject = ['$scope', '$stateParams', 'Profile', 'loggedUser', '$rootScope', 'Evaluation', '$state'];

function EvaluationCtrl($scope, $stateParams, Profile, loggedUser, $rootScope, Evaluation, $state) {

    console.log($stateParams.user);
    console.log($stateParams.type);
    $scope.alreadyVoted = false;
    $scope.thatsYou = false;
    Profile.getProfile($stateParams.user).$promise.then(function (user) {
        $scope.user = user;
        if ($rootScope.loggedUser._id == $stateParams.user) {
            $scope.thatsYou = true;
        }
        if ($stateParams.type === 'seeker') {
            var evaluators = user.evaluationAsTraveler.evaluators;
            for (var i = 0; i < evaluators.length; i++) {
                if (evaluators[i].owner._id === $rootScope.loggedUser._id) {
                    $scope.alreadyVoted = true;
                }
            }

        } else {
            var evaluators = user.evaluationAsSeeker.evaluators;
            for (var i = 0; i < evaluators.length; i++) {
                if (evaluators[i].owner._id === $rootScope.loggedUser._id) {
                    $scope.alreadyVoted = true;
                }
            }
        }
    })

    $scope.evaluation = function (rate) {
        if ($stateParams.type === 'seeker') {
            Evaluation.evaluateAsSeeker($stateParams.user, $rootScope.loggedUser._id, rate).$promise.then(function (newUser) {
                $state.go($stateParams.state);
            })
        } else {
            Evaluation.evaluateAsTraveler($stateParams.user, $rootScope.loggedUser._id, rate).$promise.then(function (newUser) {
                $state.go($stateParams.state);
            })
        }
    }

}