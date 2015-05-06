'use strict';

/**
 * @ngdoc function
 * @name yoangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoangularApp
 */
angular.module('yoangularApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    // $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
    	localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };
  });
