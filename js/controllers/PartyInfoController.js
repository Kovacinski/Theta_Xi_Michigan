app.controller('PartyInfoController', ['$scope', 'Parties', '$routeParams', function($scope, Parties, $routeParams) {
  Parties.success(function(data) {
    $scope.detail = data.results[$routeParams.id];
  });
}]);