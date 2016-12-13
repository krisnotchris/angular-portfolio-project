angular
  .module('myApp')
  .controller('NewCtrl', function($scope, $http){
    $scope.kid = {};
    $scope.create = function(){
      return $http.post('/kids', $scope.kid );
    }
  })
