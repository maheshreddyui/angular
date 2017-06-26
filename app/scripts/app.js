(function (angular) {
  'use strict';

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/login',{
        templateUrl: '../template/Login.html',
        controller:'loginController'
      })
      .when('/login1',{
        templateUrl: '../template/angularcls/Login1.html',
        controller:'loginController1'
      })
      .when('/contact',{
        templateUrl: '../template/Contact.html',
        controller:'contactController'
      })
      .when('/home',{
        templateUrl: '../template/Home.html',
        controller:'homeController'
      })
      .when('/services',{
        templateUrl: '../template/Services.html',
        controller:'servicesController'
      })
      .when('/resume',{
        templateUrl: '../template/Resume.html'
      })
      .when('/andriodapp',{
        templateUrl: '../template/andriodapp.html'
      })
      .when('/angular',{
        templateUrl: '../template/angularcls/angular.html'
      })

      //credentials
      .when('/error',{
        templateUrl: '../template/Error.html'
      })
      .when('/signup',{
        templateUrl: '../template/Signup.html'
      })
      .when('/forgetpass',{
      templateUrl: '../template/forgetpass.html'
      })

      .otherwise('/login');
  }

angular.module('projctApp',[
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'customApp.controller'])


  .config(AppConfig);
//customcontroller creating
  angular.module('customApp.controller',[]);
})(window.angular || (window.angular = {}));
