angular
  .module('myApp')
  .controller('NewCtrl', function($scope, $http, $state){

    $scope.create = function(){
      return $http.post('/kids', {data: $scope.kid})
        .then(function(data){
          console.log(data);
          $state.go("kids");
        })
    }

  })
