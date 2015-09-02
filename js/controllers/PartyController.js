app.controller('PartyController', ['$scope', 'Parties','$modal','$rootScope', function($scope, Parties, $modal, $rootScope) {
  $scope.partyName = "party";
  $scope.partyDescription = "";
  $scope.partyDate;
  $scope.partyPic;
  $scope.cleanMembers = [];
  $scope.setMembers = [];
  $scope.isDisabled = false;
  $scope.soberMembers = [];
  $scope.partyTitle;
  
  if($rootScope.user.get('Eboard') == "no") {
    $scope.isDisabled = true;
  }
  
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

      var imageBase64= $scope.partyPic.replace(/^data:image\/(png|jpeg);base64,/, "");
      var parseFile= new Parse.File("test", {base64:imageBase64});
      var Party = Parse.Object.extend("Party");
      var party = new Party();
      
      party.set("Title", $scope.partyName);
      party.set("Description", $scope.partyDescription);
      party.set("Cover_img", parseFile);
      party.set("Setup_Crew", $scope.setMembers);
      party.set("Clean_Crew", $scope.cleanMembers);
      party.set("Sober_Monitors", $scope.soberMembers);
      party.set("Date",$scope.partyDate);
      party.set("Type",$scope.partyTitle);
      
      party.save(null, {
        success: function(gameScore) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + gameScore.id);
        },
        error: function(gameScore, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
        }
      });
    });
  };
}]);
app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance',
  function($scope, $modalInstance) {
    $scope.modCleanMembers = [];
    $scope.modSetMembers = [];
    $scope.modSoberMembers = [];
  $scope.ok = function () {
    $scope.$parent.partyName = $scope.modPartyName;
    $scope.$parent.partyDescription = $scope.modPartyDescription;
    $scope.$parent.partyDate = $scope.dt;
    $scope.$parent.partyPic = $scope.modPartyPic;
    $scope.$parent.setMembers = $scope.modSetMembers;
    $scope.$parent.cleanMembers = $scope.modCleanMembers;
    $scope.$parent.partyType = $scope.modPartyType
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };
  
  $scope.cleanAdd = function (input) {
    $scope.modCleanMembers.push(input);
    $scope.cleanInput = "";
  }
  
  $scope.setAdd = function (input) {
    $scope.modSetMembers.push(input);
    $scope.setInput = "";
  }
  $scope.soberAdd = function(input) {
    $scope.modSoberMembers.push(input);
    $scope.soberInput = "";
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