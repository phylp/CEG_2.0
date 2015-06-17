app.factory('news', ['$http', function($http) { 
  return $http.get('http://content.guardianapis.com/search?page-size=15&q=us-news&api-key=ugv3zwypwwhbq96nd9f62cds') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
