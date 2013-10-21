(function() {

  'use strict';

  angular.module('angularMobileComponents', ['ngRoute', 'ngAnimate'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'src/views/main.html',
          controller: 'MainCtrl',
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}())