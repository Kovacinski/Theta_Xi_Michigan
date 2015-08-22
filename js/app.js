var app = angular.module('ThetaXiApp',['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    templateUrl: 'views/Home.html'
  })
  .when('/Home',{
    templateUrl: 'views/Home.html'
  })
  .when('/Recruitment',{
    	templateUrl: 'views/Recruitment.html'
  })
    .when('/Brotherhood',{
    templateUrl: 'views/Brotherhood.html'
  })
  .when('/Alumni',{
    templateUrl:'views/Alumni.html'
  })
  .when('/Internal',{
    controller: "PartyController",
    templateUrl:'views/Internal.html'
  })
    .otherwise({
    redirectTo: '/'
  });
});
