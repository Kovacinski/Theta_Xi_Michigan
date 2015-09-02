var app = angular.module('ThetaXiApp',['ngRoute', 'ui.bootstrap']);
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
  .when('/Internal/:id',{
    controller: "PartyInfoController",
    templateUrl: "views/parties.html"
  })
  .when('/Login',{
    controller: "LoginController",
    templateUrl: "views/login.html"
  })
  .otherwise({
    redirectTo: '/'
  });
});
app.run( function($rootScope, $location) {
    Parse.initialize("g8b8gSIVNR9SnXbE2eWtWLB1vqk1KUJGB62bHMKl", "2qZyd26IANjIb7JB9VxF3PIqU6B9pxtBy3UqCO9x");
    Parse.User.enableRevocableSession()
    // register listener to watch route changes

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if(next.templateUrl === "views/Internal.html" && !Parse.User.current()){
        $location.path('/Login');
      } else {
        $rootScope.user = Parse.User.current();
      }
    });
});
