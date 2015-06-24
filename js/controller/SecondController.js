app.controller('SecondController', ['$scope', 'sports', function($scope, sports) {
  sports.success(function(data) {
    $scope.sportHeadlines = data.response;
    console.log(data);
  }).error(function(err) {
      $scope.error = err;
      console.log(err);
  });
}]);