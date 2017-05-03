(function() {
  'use strict';

  var app = angular
    .module('almostFamousCMS', [
      'ui.router'
    ]);

    app.constant('SERVER', {
      URL: "https://api.mlab.com/api/1/databases/almostfamousatl/collections",
      CONFIG:{
          apiKey:'ZV5Qc-g5yNbRuU15JzBfdYGGEbrpMS_c',
          contentType: 'application/json'
      }
    });

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
          // controller: 'PortalCtrl'
        })
        .state('addevent', {
          url: '/addevent',
          templateUrl:'views/add_events_tpl.html',
          controller: 'EventsCtrl'
        })
        .state('addphoto', {
          url: '/addphoto',
          templateUrl:'views/add_photos_tpl.html',
          controller: 'PhotosCtrl'
        })
        .state('editevent', {
          url: '/editevent/{id}',
          templateUrl:'views/edit_events_tpl.html',
          controller: 'EventsCtrl'
        })
        .state('editphoto', {
          url: '/editphoto',
          templateUrl:'views/edit_photos_tpl.html',
          controller: 'PhotosCtrl'
        });
    }]);


}());
