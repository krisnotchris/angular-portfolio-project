angular
  .module('myApp')
  .controller('MilestoneCtrl', function($scope, $http, $state, $stateParams){
    $scope.kidId = $stateParams
    $scope.create = function(){
      $scope.milestone.kid_id = $scope.kidId.id
      console.log($scope.milestone)
      return $http.post('/milestones', {data: $scope.milestone})
        .then(function(response){

          
          $scope.kid.milestones.push(response.data);
          $state.go("book");
        })
    }

  })
