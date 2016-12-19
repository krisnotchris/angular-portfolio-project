angular
  .module('myApp')
  .controller('BookCtrl', function($scope, $http, $stateParams){
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
  })
