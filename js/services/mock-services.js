//use the factory module to create a service module , the factory registers the serive just like in 2+ where add it to the providers

app.factory('userRepo' , function($http){
    var endpointUrl = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
    
    return {
        getAllUsers: function(){
            //some ajax http call
            return $http.get(endpointUrl); // plain old JSON jesus!!!!!!!
        }
    };
});