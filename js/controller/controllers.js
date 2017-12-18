var myController = angular.module('myController', ['ui.bootstrap','googlechart','ngStorage']);

myController.controller('TableController', ['$scope', '$uibModal','$localStorage',function($scope, $uibModal, $localStorage) {

    $scope.personList = $localStorage.personList || [];

    $scope.openModal = function(person) {
      $scope.person = person;
      var modalInstance = $uibModal.open({
        templateUrl: './partials/myModalContent.html',
        controller: function($scope, $uibModalInstance, $localStorage, person) {
          $scope.person = person
          $scope.submitForm = function () {
            $uibModalInstance.close(person);
          };
          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };

        },
        resolve: {
          person: function () {
            console.log($scope)
            return $scope.person;
          }
        }
      });

      modalInstance.result.then(function (person) {
        var len = $localStorage.personList.length;
        person.id = String(++len);

        $scope.personList.push(person);
        $localStorage.personList = $scope.personList;
        console.log($localStorage.personList)


      }, function () {
        console.info('modal-component dismissed at: ' + new Date());
      });

    }

}]);

myController.controller('ChartController', ['$scope','$localStorage', '$uibModal', function($scope, $localStorage, $uibModal) {

  $scope.createChart = function () {

    $scope.personList = $localStorage.personList || [];
    var data = []
    var data = $scope.personList.map(function(value, index, arr){

      var reportingId = function(title, list) {
        for(var i = 0; i< arr.length; i++) {
          if (arr[i].title === title) return arr[i].id;
        }
        return "";
        }(value.reportingTo, arr);

        return {
          "c": [
            {"v": value.id, "f": value.firstName + " " + value.lastName },
            {"v":reportingId  },
            {"v": value.title}
          ]
          }
    })

    $scope.chart = {
        type: "OrgChart",
        data: {
        "cols" : [
            {"label": "Name", "pattern": "", "type": "string"},
            {"label": "Manager", "pattern": "", "type": "string"},
            {"label": "ToolTip", "pattern": "", "type": "string"}
        ],
        "rows" : data
      }
    };

  }
  $scope.createChart();

  $scope.openModal = function(person) {
    $scope.person = person
    var modalInstance = $uibModal.open({
      templateUrl: './partials/myModalContent.html',
      controller: function($scope, $uibModalInstance,$localStorage, person) {
        $scope.person = person
        $scope.submitForm = function () {

          $uibModalInstance.close(person);

        };
        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };

      },
      resolve: {
        person: function () {
          console.log($scope)
          return $scope.person;
        }
      }
    });

    modalInstance.result.then(function (person) {
      var len = $localStorage.personList.length;
      person.id = String(++len);

      $scope.personList.push(person);
      $localStorage.personList = $scope.personList;
      $scope.createChart();

    }, function () {
      console.info('modal-component dismissed at: ' + new Date());
    });

  }
}])

myController.directive('orgchart', function() {
  return {
    restrict: 'E',
    link: function($scope, $elm) {

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.OrgChart($elm[0]);
      chart.draw($scope.orgChartData);
    }
}
});
