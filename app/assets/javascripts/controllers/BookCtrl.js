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

    $scope.deleteEvent = function(events) {
      var result = confirm('Are you sure you want to delete this milestone?');
      if (result) {
        $http.delete('milestones/' + events.id, events)
        .then(function(response){
          var index = $scope.kid.milestones.indexOf(events);
          $scope.kid.milestones.splice(index, 1)
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

  })
