/**
 * Created by chiheb on 05/04/2016.
 */

angular.module('myApp.demand')
    .controller('DemandCtrl',DemandCtrl);

DemandCtrl.$inject = ['Demand','$scope','$location'];

function DemandCtrl(Demand, $scope,$location){

    $scope.newdemand = {
        content : '',
        type : '',
        image : '',
        date : ''
    };
    $scope.show = false;

    Demand.getDemand('56f6db22bd8948bc12c7cf42').$promise.then(function (demand) {
        $scope.demand = demand;
    });

    $scope.rendezvous = function(){
        $scope.show = !($scope.show);
    };

    $scope.update = function(demand){
        var d = {content : demand.content,type : demand.type,image : demand.image,date : demand.date};
        console.log(d);
        Demand.updateDemand($scope.demand._id,d);
        $scope.demand = demand;
        $location.path('/demand');
    }

    $scope.add = function(demand){
        Demand.create(demand);
        $scope.demand = demand;
        $location.path('/demand');
    }

    $scope.saveAppointment = function(demand){
        var d = {date : demand.appointment.date,address : demand.appointment.address,latitude : demand.appointment.latitude,
            longitude : demand.appointment.longitude};
        console.log(d);
        Demand.AddDemandAppointment($scope.demand._id,d);
        $scope.demand = demand;
        $location.path('/demand');
        $scope.show = false;
    }

    $scope.deleteAppointment = function(){
        Demand.DeleteDemandAppointment($scope.demand._id);
        $location.path('/demand');
        $scope.show = false;
    }
}