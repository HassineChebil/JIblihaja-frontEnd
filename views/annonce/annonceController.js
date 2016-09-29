angular.module('myApp.annonce')
    .controller('AnnonceController',AnnonceController);

AnnonceController.$inject = ['Annonce','$scope'];

function AnnonceController(Annonce, $scope){
    Annonce.getAll().$promise.then(function (annonce) {
        $scope.annonces = annonce;
     });

    $scope.create = function(annonce)	{
        Annonce.addAnnonce(annonce).$promise.then(function(response){


            Annonce.addAnnonce(annonce)

        });


        $location.path('/annonce-list');

    };



}
