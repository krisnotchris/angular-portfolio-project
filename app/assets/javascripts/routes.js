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
   .state('newKid',{
     url: '/kids/new',
     templateUrl: 'views/newkid.html',
     controller: 'NewCtrl'
   })
   .state('book',{
     url: '/kids/:id',
     templateUrl: 'views/book.html',
     controller: 'BookCtrl'
   })
   .state('book.edit',{
     url: '/edit',
     templateUrl: 'views/editbook.html',
     controller: 'BookCtrl'
   })
   .state('book.newMilestone',{
     url: '/milestones/new',
     templateUrl: 'views/newmilestone.html',
     controller: 'MilestoneCtrl'
   })

   $urlRouterProvider.otherwise('/')
 })
