google.load('visualization', '1', {packages:['orgchart']});

var myApp = angular.module('myApp', ['ngRoute','myController','googlechart','ngStorage']);

myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.
    when('/table', {
      templateUrl: 'partials/table.html',
      controller: 'TableController'
    }).
    when('/chart', {
      templateUrl: 'partials/peopleChart.html',
      controller: 'ChartController'
    }).
    otherwise({
      redirectTo: '/table'
    });
}])

myApp.controller('NavCtrl',
['$scope', '$location', '$localStorage', function ($scope, $location, $localStorage) {
  $scope.personList = [
    {
      "id":"1",
      "firstName":"John",
      "lastName":"A",
      "linkedinURL":"Linkedin",
      "title":"CSM",
      "reportingTo":"Manager",
      "location":"New Jersey"
    },
    {
      "id":"2",
      "firstName":"Person",
      "lastName":"B",
      "linkedinURL":"Linkedin",
      "title":"Manager",
      "reportingTo":"DE",
      "location":"New York"
    },
    {
      "id":"3",
      "firstName":"Person",
      "lastName":"C",
      "linkedinURL":"Linkedin",
      "title":"DE",
      "reportingTo":"CTO",
      "location":"Texas"
    },
    {
      "id":"4",
      "firstName":"Person",
      "lastName":"D",
      "linkedinURL":"Linkedin",
      "title":"SVP",
      "reportingTo":"CTO",
      "location":"Texas"
    },
    {
      "id":"5",
      "firstName":"Person",
      "lastName":"E",
      "linkedinURL":"Linkedin",
      "title":"CTO",
      "reportingTo":"",
      "location":"Texas"
    }
  ];

  $localStorage.personList = $scope.personList;
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };

  $scope.loadTable = function () {
        $location.url('/table');
    };

  $scope.loadChart = function () {
        $location.url('/chart');
    };

}]);
