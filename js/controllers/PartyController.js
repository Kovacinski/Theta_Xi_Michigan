app.controller('PartyController', ['$scope', 'Parties','$modal', function($scope, Parties, $modal) {
  $scope.partyName = "party";
  $scope.partyDescription = "";
  $scope.partyDate;
  $scope.partyPic;
  $scope.cleanMembers = [];
  
  
  Parties.success(function(data) {
    $scope.info = data;
  });
  $scope.open = function (s) {
      $scope.yep ="yep";
    var modalInstance = $modal.open({
      controller: 'ModalInstanceCtrl',
      templateUrl: 'myModalContent.html',
      scope: $scope
    });
  
  modalInstance.result.then(function(message){

    console.log($scope.partyName);
    console.log($scope.partyDescription);
    console.log($scope.partyDate);
    console.log($scope.partyPic);
    console.log($scope.cleanMembers);
  });
  };
}]);
app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance',
  function($scope, $modalInstance) {
    $scope.modCleanMembers = [];
  $scope.ok = function () {
    $scope.$parent.partyName = $scope.modPartyName;
    $scope.$parent.partyDescription = $scope.modPartyDescription;
    $scope.$parent.partyDate = $scope.dt;
    $scope.$parent.partyPic = $scope.modPartyPic;
    for(i = 0; i < $scope.modCleanMembers.length; i++ )
    {
      $scope.$parent.cleanMembers[i] = $scope.modCleanMembers[i];
    }
    //$scope.$parent.cleanMembers = $scope.modCleanMembers;
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };
  
  $scope.cleanAdd = function (input) {
    $scope.modCleanMembers.push(input);
  }
  
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
  }
]);