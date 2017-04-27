(function() {
  'use strict';

  var app = angular
    .module('almostFamousCMS', [
      'ui.router'
    ]);

    app.constant('SERVER', {
      URL: "https://api.mlab.com/api/1/databases/almostfamousatl/collections",
      CONFIG:{
          apiKey:'ZV5Qc-g5yNbRuU15JzBfdYGGEbrpMS_c'
          // 'contentType': 'application/json'
      }
    });

    // var database = firebase.database();

    app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      //====================================
      // Home About Events and Booking Views
      //====================================

        .state('home', {
          url: '/',
          templateUrl:'views/portal_tpl.html' //make sure to add comma when activating controller
        })
        .state('addevents', {
          url: '/addevents',
          templateUrl:'views/add_events_tpl.html',
          controller: 'EventsCtrl'
        })
        .state('addphotos', {
          url: '/addphotos',
          templateUrl:'views/add_photos_tpl.html'
          controller: 'PhotosCtrl'
        })
        .state('editevents', {
          url: '/editevents',
          templateUrl:'views/edit_events_tpl.html',
          controller: 'EventsCtrl'
        })
        .state('editphotos', {
          url: '/editphotos',
          templateUrl:'views/edit_photos_tpl.html'
          controller: 'PhotosCtrl'
        });
    }]);


}());
