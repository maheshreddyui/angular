//iifee construct

(function (angular) {
  'use strict';
  function LoginController1($scope,$location){
    $scope.user = {
      'paword': ''
    };
    $scope.heloUser = function () {
      if ($scope.user.paword === '0000' ){
        $location.path('/home');
      }else{
        console.log('enter wrong');
      }
    };

  }
  LoginController1.$inject= ['$scope','$location'];

  angular.module('customApp.controller').controller('loginController1',LoginController1);

})(window.angular || (window.angular = {}));
