'use strict';

/**
 * @ngdoc function
 * @name yoangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoangularApp
 */
angular.module('yoangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
