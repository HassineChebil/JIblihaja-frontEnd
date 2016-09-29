/**
 * Created by hassine on 4/10/2016.
 */
angular.module('myApp.evaluation')
    .factory('Evaluation',Evaluation);

Evaluation.$inject = ['$resource'];

function Evaluation($resource){
    var service =  {};
    service.evaluateAsSeeker = evaluateAsSeeker;
    service.evaluateAsTraveler = evaluateAsTraveler;
    return service;

    function evaluateAsSeeker(owner, evaluator, note){
        return $resource('http://localhost:3000/evaluation/seeker/:id',null,{'update' : {method : 'PUT'}}).update({id : owner},{user : evaluator, note:note});
    }

    function evaluateAsTraveler(owner, evaluator, note){
        return $resource('http://localhost:3000/evaluation/traveler/:id',null,{'update' : {method : 'PUT'}}).update({id : owner},{user : evaluator, note:note});
    }
}