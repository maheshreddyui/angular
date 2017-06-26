//iifee construct

(function (angular) {
  'use strict';
  function AngularController($scope,$location,$anchorScroll){

    var employees = [
      {Number: 1001, Firstname:'Ben',Lastname:'doe', gender:'Male', Email: 'Ben@gmail.com', Salary:1545, Hire:12092014, DOB:1121994},
      {Number: 1002,Firstname:'Sara',Lastname:'vellala', gender:'Female', Email: 'Sarasdf@gmail.com',Salary:4512, Hire:2032011, DOB:5101993},
      {Number: 1003,Firstname:'shiv',Lastname:'kondoju', gender:'Female', Email: 'Shiv@gmail.com',Salary:4562, Hire:9092014, DOB:8091994},
      {Number: 1004,Firstname:'doe', Lastname:'munagala',gender:'Female', Email: 'doe@gmail.com',Salary:8795, Hire:11092013, DOB:10121980},
      {Number: 1005,Firstname:'Tood',Lastname:'chinta', gender:'Male', Email: 'Toodhacker@gmail.com',Salary:6513, Hire:10092012, DOB:10121986}
    ];
    $scope.employees = employees;

//scrolling pages
    $scope.scrollTo= function (scrollLocation) {
      $location.hash(scrollLocation);
      $anchorScroll();
    };
  }


  AngularController.$inject= ['$scope','$location','$anchorScroll'];

  angular.module('customApp.controller').controller('angularController',AngularController);

})(window.angular || (window.angular = {}));
