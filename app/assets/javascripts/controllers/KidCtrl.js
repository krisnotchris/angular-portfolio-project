angular
  .module('myApp')
  .controller('KidCtrl', function($scope, $http, $stateParams){
    $http.get('/kids')
    .then(function(response){
      $scope.myWelcome = response.data;
    })
  })
