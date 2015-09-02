app.controller('PartyInfoController', ['$scope', 'Parties', '$routeParams', 'Comments', function($scope, Parties, $routeParams,Comments) {
  Parties.success(function(data) {
    $scope.detail = data.results[$routeParams.id];
    console.log("DETAIL");
    console.log($scope.detail);
    $scope.comments = Comments.getComments($scope.detail.objectId);
    console.log($scope.comments);
  });
}]);