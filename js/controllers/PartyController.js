app.controller('PartyController', ['$scope', 'Parties', function($scope, Parties) {
  Parties.success(function(data) {
    $scope.info = data;
  });
}]);