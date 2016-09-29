/**
 * Created by hassine on 4/4/2016.
 */

angular.module('myApp.profile')
    .controller('ProfileCtrl',ProfileCtrl);

ProfileCtrl.$inject = ['$rootScope','Profile','$scope','loggedUser','$state','Upload'];

function ProfileCtrl($rootScope,Profile, $scope,loggedUser,$state,Upload){
    /*Profile.getAll().$promise.then(function (users) {

    });*/

   /* Profile.getProfile($rootScope.loggedUser._id).$promise.then(function (user) {
     console.log(user);
    });*/

    /*Profile.updateProfile('56fe4438b062f01021263de4', {email : 'new4@gmail.com', tel : '99060889', fName : 'Hassine', lName : 'Chebil'}).$promise.then(function (newUser) {
        $scope.user = newUser;
    });*/

    /*Profile.getProfile($rootScope.loggedUser._id).$promise.then(function (user) {
        console.log(user);
    });*/

    $scope.profile = $rootScope.loggedUser;

    $scope.filesChanged = function (elm) {
        $scope.img = elm.files;
        $scope.$apply();
    }



    $scope.updateProfile= function (profile) {
        Profile.updateProfile($rootScope.loggedUser._id, profile).$promise.then(function (newUser) {
            $rootScope.loggedUser = newUser;
            $scope.profile = $rootScope.loggedUser;
            $state.go('profile-settings');
        });
    };

    $scope.updateImage = function(file){
        console.log($rootScope.loggedUser._id);
        Upload.upload({
            url: 'http://localhost:3000/profile/updateImg/'+$rootScope.loggedUser._id, //webAPI exposed to upload the file
            data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code === 0){ //validate success
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
                $state.go('profile');
            } else {
                console.log('an error occured');
            }

        }, function (resp) { //catch error
            console.log('Error status: ' + resp.err);
        }, function (evt) {
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress

        })
            .finally(function(){
                Profile.getProfile($rootScope.loggedUser._id).$promise.then(function (user) {
                    $rootScope.loggedUser=user;
                });
            });

    };

    console.log({fromProfile : $rootScope.loggedUser});

}
