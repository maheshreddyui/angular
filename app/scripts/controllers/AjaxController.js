/**
 * Created by KRISHNA on 6/18/2017.
 */
//iifee construct

(function (angular) {
  'use strict';
  function AjaxController($scope,$http){
   var skr = "../Ajax/date.json";
   $http.get(skr).then(function (response) {
     $scope.students = response.data;
   });
  }
  AjaxController.$inject= ['$scope','$http'];


  angular.module('customApp.controller').controller('ajaxController',AjaxController);

})(window.angular || (window.angular = {}));
