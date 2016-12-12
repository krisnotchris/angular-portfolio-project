angular
.module('myApp')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
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
   .state('kids',{
     url: '/kids',
     templateUrl: 'views/kids.html',
     controller: 'KidCtrl'
   })
   .state('book',{
     url: '/kids/:id',
     templateUrl: 'views/book.html',
     controller: 'BookCtrl'
   })
   $urlRouterProvider.otherwise('/')
 })
