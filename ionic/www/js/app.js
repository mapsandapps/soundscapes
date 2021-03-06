// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', 
  [
    'ionic', 
    'app.controllers', 
    'ngStorage',
    'ngAudio'
  ])

.run(function($ionicPlatform, $localStorage) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleLightContent();
    }

    $localStorage.$default({
      gameProgress: {}
    });
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/',
    // abstract: true,
    templateUrl: 'templates/nav.html'
  })
  .state('learn', {
    url: '/learn',
    templateUrl: 'templates/learn.html',
    controller: 'LearnCtrl as learn'
  })
  .state('tutorial', {
    url: '/tutorial',
    templateUrl: 'templates/tutorial.html',
    controller: 'TutorialCtrl as tutorial'
  })
  .state('game', {
    url: '/game',
    templateUrl: 'templates/game.html',
    controller: 'PacksCtrl as packs'
  })
  .state('game-pack', {
    url: '/game/:pack/',
    templateUrl: 'templates/game-play.html',
    controller: 'GamePlayCtrl as gamePlay'
  })
  .state('explore', {
    url: '/explore',
    templateUrl: 'templates/explore.html',
    controller: 'PacksCtrl as packs'
  })
  .state('explore-pack', {
    url: '/explore/:pack/',
    templateUrl: 'templates/explore-pack.html',
    controller: 'ExploreCtrl as explore'
  });

  $urlRouterProvider.otherwise('/');

})

.filter('character', function() {
  return function(input) {
    return String.fromCharCode(64 + parseInt(input, 10));
  };
});
angular.module('app.controllers', []);

