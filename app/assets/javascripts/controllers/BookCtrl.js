angular
  .module('myApp')
  .controller('BookCtrl', function($scope, $http, $stateParams){

    var kidsId = $stateParams;
    $http.get('/kids/' + kidsId.id)
    .then(function(response){

      $scope.kid = response.data;
    })

    $scope.edit = function(){
      console.log('hello');
    }

    $scope.deleteKid = function(){

    }
  })
