angular
  .module('myApp')
  .controller('BookCtrl', function($scope, $http, $stateParams, $state){
    var kidsId = $stateParams;
    $http.get('/kids/' + kidsId.id)
      .then(function(response){
        $scope.kid = response.data;
      })

    $scope.updateKid = function(kid){
      $http.put('/kids/' + kidsId.id, kid)
      .then(function(response){

      })
    }
    $scope.updateEvent = function(events) {
      $http.put('/milestones/' + events.id, events)
        .then(function(response){
        })
    }

    $scope.deleteEvent = function(event) { // the event is being passed in from the view when the button is clicked
      var result = confirm('Are you sure you want to delete this milestone?');
      if (result) {
        $http.delete('milestones/' + event.id, event)
        .then(function(response){
          var index = $scope.kid.milestones.indexOf(event); // this is searching $scope.kid.milestones array for the location of the event object and assigning it to var index
          $scope.kid.milestones.splice(index, 1) // removes 1 item from the array at the index location
            })}
    }

    $scope.increaseCount = function(events){
      if (events.upvotes == null){
        events.upvotes = 0
        events.upvotes += 1;
        $http.put('upvote', events)
        .then(function(response){
        })
      } else {
        events.upvotes += 1;
        $http.put('upvote', events)
        .then(function(response){

        })
      }

    }
    $scope.notes = []
    $scope.addNote = function(){
      if($scope.note !=''){
        $scope.notes.push($scope.note);
        $scope.note = '';
      }
    }
    $scope.deleteNote = function($index){
      $scope.notes.splice($index, 1)
    }

  })
