angular
.module('myApp')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
   .state('login', {
     url: '/login',
     templateUrl: 'views/login.html',
     controller: 'AuthCtrl',
     onEnter: function(Auth, $state){
       Auth.currentUser().then(function(){
         $state.go('home')
       })
     }
   })
   .state('register', {
     url: '/register',
     templateUrl: 'views/register.html',
     controller: 'AuthCtrl',
     onEnter: function(Auth, $state){
       Auth.currentUser().then(function(){
         $state.go('home')
       })
     }
   })
   .state('users',{
     url: '/users',
     templateUrl: 'views/user.html',
     controller: 'UserCtrl'
   })
   $urlRouterProvider.otherwise('/home')
 })
