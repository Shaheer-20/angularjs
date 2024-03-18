var myApp = angular.module('myApp', []);
myApp.controller('EmployeeController', function($scope) {
 $scope.employees = [
 { name: 'John Doe', salary: 50000 },
 { name: 'Jane Doe', salary: 60000 },
 { name: 'Peter Parker', salary: 70000 },
 { name: 'Mary Jane Watson', salary: 80000 }
 ];
 $scope.searchEmployees = function() {
 $scope.employees = $scope.employees.filter(function(employee){
    return employee.name.toLowerCase().indexOf($scope.searchName.toLowerCase()) !== -
 1 && employee.salary >= $scope.searchSalary;
  });
  };
 })