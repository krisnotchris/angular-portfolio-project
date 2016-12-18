angular
  .module('myApp')
  .controller('BookCtrl', function($scope, $http, $stateParams){
    var kidsId = $stateParams;
    var editMode = false;
    $http.get('/kids/' + kidsId.id)
      .then(function(response){
        $scope.kid = response.data;
      })
    $scope.updateKid = function(kid){
      editMode = true;
      $http.put('/kids/' + kidsId.id, kid)
      .then(function(response){

        console.log(editMode)
        console.log(response)

      })
    }
  })
