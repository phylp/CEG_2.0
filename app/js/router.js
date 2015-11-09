module.exports = function(app){
  app.config(['$routeProvider', function($route){
    $route
      .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'welcome'
      })
      .when('/games', {
        templateUrl: 'templates/games.html',
        controller: 'games'
      })
      .when('/news', {
        templateUrl:'templates/news.html',
        controller: 'newsController'
      })
      .when('/search', {
        templateUrl: 'templates/search.html',
        controller: 'newsController'
      })
      .otherwise({
        redirectTo: '/home'
      })
  }]);
};