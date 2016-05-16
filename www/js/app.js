// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html',
        controller:'contactCtrl'
      }
    }
  })

  .state('app.morecontact', {
    url: '/morecontact/{id}?tel&email',
    views: {
      'menuContent': {
        templateUrl: 'templates/morecontact.html',
        controller:'contactitem'
      }
    }
  })

  .state('app.church-services', {
      url: '/church-services',
      views: {
        'menuContent': {
          templateUrl: 'templates/church-services.html',
          controller: 'ChurchServicesCtrl'
        }
      }
    })
  .state('app.doacoes', {
      url: '/doacoes',
      views: {
        'menuContent': {
          templateUrl: 'templates/doacoes.html',
          controller: 'doacoesCtrl'
        }
      }
    })


    .state('app.news', {
      url: '/news',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html',
          controller: 'NewsCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/news');
});

