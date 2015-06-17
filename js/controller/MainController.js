app.controller('MainController', ['$scope', 'news', function($scope, news) {
  news.success(function(data) {
    $scope.headlines = data.response;
    console.log(data);
  }).error(function(err) {
      $scope.error = err;
      console.log(err);
  });
}]);