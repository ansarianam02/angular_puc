var app = angular.module('myApp', []);
app.controller('MyCtrl', function($scope, $http) {
   
   $scope.init = function() {
     $scope.icon_more=true;
     $scope.icon_pin=true;
     $scope.icon_share=true;
     $scope.icon_four=true;
     $scope.icon_fifth=true;
     $scope.noofbox=1;
     $scope.title_text="Hello EveryOne !!";
   };
   $scope.init();


    });

    app.filter('range', function() {
      return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++)
          input.push(i);
        return input;
      };
    });	
