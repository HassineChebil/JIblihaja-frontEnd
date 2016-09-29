/**
 * Created by hassine on 4/5/2016.
 */
angular.module('myApp.access')
        .controller('AccessCtrl',AccessCtrl);

AccessCtrl.$inject=['$rootScope','$scope','Access','$state','loggedUser'];

function AccessCtrl($rootScope,$scope,Access,$state,loggedUser){
    console.log($rootScope.loggedUser);
    $scope.newUser = {
        fName : "",
        lName : "",
        email : "",
        password : ""
    };
    $scope.registerResp = {};
    $scope.fieldregisterError = [];
    $scope.register = function(newUser){
        $scope.fieldregisterError = [];
        if(newUser.fName == ""){
            $scope.fieldregisterError.push('Veuillez saisir votre prénom');
        }
       if(newUser.lName == ""){
            $scope.fieldregisterError.push('Veuillez saisir votre nom');
        }
       if(newUser.email == ""){
            $scope.fieldregisterError.push('Veuillez entrer votre email');
        }
        if(newUser.password == ""){
            $scope.fieldregisterError.push('Veuillez entrer votre mot de passe');
        }
        if(newUser.fName != "" && newUser.lName != "" && newUser.email != "" && newUser.password != ""){
       Access.register(newUser, function (response) {
           if(response.success){
               $scope.registerResp = {status : 1, message : "Vous êtes bien enregistrer à Jiblihaja. Maintenant vous pouvez vous connecté."};
               $scope.newUser = {};
           }else{
               $scope.registerResp = {status : 0, message : "Utilisateur déja enregistrer!!"};
               console.log(response);
           }

       });
        }
    }
    $scope.login = function(user){
        Access.login(user,function(response){
            if(response.success){
                $rootScope.loggedUser = response.user;
                $state.go('home');
            }else{
                console.log('failure');
            }
        });
    }
    $scope.logout = function(){
        Access.logout(function(response){
            if(response.success){
                $rootScope.loggedUser = undefined;
                $state.go('home');
            }
        })
    }

}