module.exports = function(app){
  app.config(['$routeProvider', function($route){
    $route
      .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'welcome'
      })
      .when('/games', {
        templateUrl: 'templates/games.html'
      })
      .when('/news', {
        templateUrl:'templates/news.html',
        controller: 'newsController'
      })
      .when('/search', {
        templateUrl: 'search.html'
      })
      .otherwise({
        redirectTo: '/home'
      })
  }]);
};