//iifee construct
(function (angular) {
  'use strict';
  function LoginController($scope,$location){

    $scope.user = {
      'username': '',
      'password': ''
    };
    $scope.loginUser = function () {
      if ($scope.user.username === 'root' && $scope.user.password ===  $scope.user.pasword ){
        $location.path('/home');
      }else{
        $location.path('/error');
      }
    };

    // for reset button
    $scope.reset =  function () {
      $scope.user.username =  '';
      $scope.user.password='';
      $scope.user.pasword='';

    };
    $scope.reset();
  }
  LoginController.$inject= ['$scope','$location'];
  angular.module('customApp.controller').controller('loginController',LoginController);
})(window.angular || (window.angular = {}));
