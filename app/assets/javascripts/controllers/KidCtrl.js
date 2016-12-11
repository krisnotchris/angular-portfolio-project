angular
  .module('myApp')
  .controller('KidCtrl', function($scope, $http){
    $http.get('/kids')
    .then(function(response){
      $scope.myWelcome = response.data;
    })
  })
