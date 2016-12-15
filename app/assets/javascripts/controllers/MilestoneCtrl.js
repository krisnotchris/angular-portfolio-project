angular
  .module('myApp')
  .controller('MilestoneCtrl', function($scope, $http, $state){

    $scope.create = function(){
      return $http.post('/milestones', {data: $scope.milestone})
        .then(function(data){
          console.log(data);
          $state.go("book");
        })
    }

  })
