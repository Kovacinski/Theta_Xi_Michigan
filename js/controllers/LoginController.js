app.controller('LoginController', ['$scope','$rootScope','$window', function($scope,$rootScope, $window) {
    $scope.submit = function() {
        Parse.User.logIn($scope.inputName,  $scope.userPassword, {
            success: function(user) {
            // Do stuff after successful login.
            $rootScope.user = user;
            console.log("success");
            $window.location.href = '#/Internal';
             },
            error: function(user, error) {
            // The login failed. Check error to see why.
            Parse.User.logOut();
            console.log(error);
             }
        });
    }
}]);