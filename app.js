(function(){
  'use strict';

  angular.module('LunchCheck', []);

  .controller('LunchCheckController', LunchCheckController);
   .$inject=['$scope'];
   Function LunchCheckController($scope) {
    var splitwords=$scope.text;
    $scope.wordcounter= function() {


    splitwords=splitwords.split(,).length;

    }



  });

})();
