/**
 * Created by chiheb on 05/04/2016.
 */

angular.module('myApp.demand')
    .factory('Demand',Demand);

Demand.$inject = ['$resource'];

function Demand($resource){

    var service =  {};
    service.getAll = getAll;
    service.create = create;
    service.getDemand = getDemand;
    service.updateDemand = updateDemand;
    service.deleteDemand = deleteDemand;
    service.AddDemandAppointment = AddDemandAppointment;
    service.DeleteDemandAppointment = DeleteDemandAppointment;
    return service;

    function getAll(){
        return $resource('http://localhost:3000/demands/').query();
    }

    function create(obj){
        return $resource('http://localhost:3000/demands/').save(obj);
    }

    function  getDemand(id){
        return $resource('http://localhost:3000/demands/:id').get({id : id});
    }

    function updateDemand (id,obj){
        return $resource('http://localhost:3000/demands/:id',null,{'update' : {method : 'PUT'}}).update({id : id},obj);
    }

    function deleteDemand(id){
        return $resource('http://localhost:3000/demands/:id').delete({id : id});
    }

    function AddDemandAppointment (id,obj){
        return $resource('http://localhost:3000/demands/add/:id',null,{'update' : {method : 'PUT'}}).update({id : id},obj);
    }

    function DeleteDemandAppointment (id){
        return $resource('http://localhost:3000/demands/delete/:id',null,{'update' : {method : 'PUT'}}).update({id : id},{});
    }
}
