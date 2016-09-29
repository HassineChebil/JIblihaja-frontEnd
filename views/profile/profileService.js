/**
 * Created by hassine on 4/4/2016.
 */

angular.module('myApp.profile')
        .factory('Profile',Profile);

Profile.$inject = ['$resource'];

function Profile($resource){

    var service =  {};
    service.getAll = getAll;
    service.getProfile = getProfile;
    service.updateProfile = updateProfile;
    service.deleteProfile = deleteProfile;
    service.get5firstSeekers = get5firstSeekers;
    service.get5firstTravelers = get5firstTravelers;
    return service;

    function getAll(){
         return $resource('http://localhost:3000/profile/:id').query();
    }

    function  getProfile(id){
        return $resource('http://localhost:3000/profile/:id').get({id : id}/*,null,function(res){
            var response;
            if (res.success){
                response = {success : true, user: res.user};
            }else{
                response = {success : false, message : 'no user found'};
            }
            callback(response);
        }*/);
    }

    function updateProfile (id,obj){
        return $resource('http://localhost:3000/profile/:id',null,{'update' : {method : 'PUT'}}).update({id : id},obj);
    }

    function deleteProfile(id){
        return $resource('http://localhost:3000/profile/:id').delete({id : id});
    }

    function get5firstSeekers(){
        return $resource('http://localhost:3000/profile/seekers').query();
    }

    function get5firstTravelers(){
        return $resource('http://localhost:3000/profile/travelers').query();
    }
}

