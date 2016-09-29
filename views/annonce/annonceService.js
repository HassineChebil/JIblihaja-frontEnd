angular.module('myApp.annonce')
    .factory('Annonce',Annonce);

Annonce.$inject = ['$resource'];

function Annonce($resource){

    var service =  {};
    service.getAll = getAll;
    service.getAnnonce = getAnnonce;
    service.updateAnnonce = updateAnnonce;
    service.deleteAnnonce = deleteAnnonce;
    return service;

    function getAll(){
        return $resource('http://localhost:3000/annonces').query();
    }

    function addAnnonce(annonce){
        return $resource('http://localhost:3000/annonces').save(annonce);

    }

    function  getAnnonce(id){
        return $resource('http://localhost:3000/annonces/:id').get({id : id});
    }

    function updateAnnonce (id,obj){
        return $resource('http://localhost:3000/annonces/:id',null,{'update' : {method : 'PUT'}}).update({id : id},obj);
    }

    function deleteAnnonce(id){
        return $resource('http://localhost:3000/annonces/:id').delete({id : id});
    }
}

