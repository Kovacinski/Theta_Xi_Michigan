app.factory('Parties', ['$http', function($http) { 
  return $http.get('https://api.parse.com/1/classes/Party',{
                headers:{
                    'X-Parse-Application-Id': 'g8b8gSIVNR9SnXbE2eWtWLB1vqk1KUJGB62bHMKl',
                    'X-Parse-REST-API-Key': 'V4yPdHqZ35QUW9AI5JtH38bqia2Dp3GQkPszE0KN',
                }
            })
            .success(function(data) { 

              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);