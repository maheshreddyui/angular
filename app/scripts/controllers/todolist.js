/**
 * Created by KRISHNA on 6/17/2017.
 */
//iifee construct

(function (angular) {
  'use strict';
  function TodoController($scope){

    $scope.todoList = [{todoText:'clean', done:false}];

    $scope.todoAdd = function () {
      $scope.todoList.push({todoText:$scope.todoInput, done:false});
      $scope.todoInput = '';
    };
    $scope.remove = function() {
      var oldList = $scope.todoList;
      $scope.todoList = [];
      angular.forEach(oldList, function(x) {
        if (!x.done) $scope.todoList.push(x);
      });
    };
    //note pad app

    $scope.message = "";
    $scope.left = function() {
      return 100 - $scope.message.length;
    };
    $scope.clear = function() {
      $scope.message = "";
    };

  }
  TodoController.$inject= ['$scope'];



  angular.module('customApp.controller').controller('todoController',TodoController);

})(window.angular || (window.angular = {}));
