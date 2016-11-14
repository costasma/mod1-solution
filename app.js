(function(){
  'use strict';

  angular.module('LunchCheck', []);

  .controller('LunchCheckController', LunchCheckController);
   LunchCheckController.$inject=['$scope'];
   function LunchCheckController($scope) {
    $scope.name="";
    $scope.wordssum=0;

    $scope.wordcounter= function() {

    var splitedwords=calculatewordcounter($scope.name);
    $scope.wordssum=splitedwords;

  };
  function calculatewordcounter(string)
  {

  var totalwordsvalue=0;
  totalwordsvalue=string.split(,).length;
  }

  return totalwordsvalue;
  });

})();
