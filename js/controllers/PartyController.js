app.controller('PartyController', ['$scope', 'Parties','$modal', function($scope, Parties, $modal) {
  $scope.partyName = "";
  $scope.partyDescription = "";
  $scope.partyDate;
  Parties.success(function(data) {
    $scope.info = data;
  });
  $scope.open = function (s) {
      $scope.yep ="yep";
    $scope.modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      scope: $scope
    });
  };
  $scope.ok = function () {
    $scope.modalInstance.close();
  };

  $scope.cancel = function () {
    $scope.modalInstance.dismiss('cancel');
  };
  
  // date picker controles -->
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();
  // makes it so you cant pick dates in the past -->
   $scope.minDate = $scope.minDate ? null : new Date();
   

  $scope.datePickerOpen = function($event) {
    $scope.status.opened = true;
  };
  
   $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.format = 'MMMM-dd-yyyy';
    $scope.status = {
    opened: false
  };
    $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
}]);