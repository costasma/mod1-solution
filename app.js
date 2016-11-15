(function(){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
   LunchCheckController.$inject=['$scope'];
   function LunchCheckController($scope) {
    $scope.name="";
    $scope.wordssum=0;
    $scope.message="";
    $scope.customstyle={};
    $scope.wordcounter= function() {

    var splitedwords=calculatewordcounter($scope.name);


    var wordssum=splitedwords;

    if (wordssum <=3 ){
      $scope.message="Enjoy!";
      $scope.customstyle.style={"color":"green"};
    }
    else  {
      $scope.message="Too much!";
      $scope.customstyle.style={"color":"red"};
    }
    if (wordssum ==0 ){
      $scope.message="Please enter data first!";
      $scope.customstyle.style={"color":"black"};
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
