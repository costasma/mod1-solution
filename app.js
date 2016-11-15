(function(){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
   LunchCheckController.$inject=['$scope'];
   function LunchCheckController($scope) {
    $scope.name="";
    $scope.wordssum=0;
    $scope.message="";
    $scope.wordcounter= function() {

    var splitedwords=calculatewordcounter($scope.name);


    var wordssum=splitedwords;

    if (wordssum <=3 ){
      $scope.message="Enjoy!";
    }
    else  {
      $scope.message="Too much!";
    }
    if (wordssum ==0 ){
      $scope.message="Please enter data first!";
    }

  };
  function calculatewordcounter(string)
  {

  var totalwordsvalue=0;

  if (string==""){
    totalwordsvalue =0
  }
  else {
    totalwordsvalue =string.split(",").length;
  }


  return totalwordsvalue;
  };
  }

})();
