require ('angular/angular');
var angular = window.angular;
require('angular-route');

var cegApp = angular.module('cegApp', ['ngRoute']);

require('./services/services')(cegApp);
require('./controllers/controllers')(cegApp);
require('./router')(cegApp);

