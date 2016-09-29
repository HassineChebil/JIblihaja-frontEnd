/**
 * Created by hassine on 4/6/2016.
 */
angular.module('myApp.access')
            .factory('Access',Access);

Access.$inject = ['$resource'];

function Access($resource){

    var service =  {};
    service.register = register;
    service.login = login;
    service.logout = logout;
    return service;

    function register(obj,callback){
        var response;
        return $resource('http://localhost:3000/register').save(obj,function(res){
            if (res.success){
            response = {success : true};
            }else{
                response = {success : false, message : res.err.message};
            }
            callback(response);
        });
    }

    function login(obj,callback){
        var response;
        return $resource('http://localhost:3000/access').save(obj,function(res){
            if (res.success){
               response = {success : true, user: res.user};
            }else{
                response = {success : false, message : 'email ou mot de passe incorrecte'};
            }
            callback(response);
        });
    }

    function logout(callback){
        var response;
        return $resource('http://localhost:3000/access').get(function(res){
            if (res.success){
                response = {success : true, user: res.user};
            }else{
                response = {success : false, message : 'erreur lors de la déconnection'};
            }
            callback(response);
        });
    }

}