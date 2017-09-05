angular
  .module("quoteBook")
  .controller("mainCtrl", function($scope, quoteService) {
    $scope.quotes = quoteService.getQuotes();

    $scope.addData = function(quoteObj) {
      quoteService.addQuote(quoteObj);
      $scope.newContact = {};
    };

    $scope.removeData = function(index) {
      quoteService.removeData(index);
    };

    $scope.addQuote = quoteService.addQuote;
  });
