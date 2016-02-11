(function() {

	angular
	.module('app')
	.controller('convertCurrencyCtrl', convertCurrencyCtrl);

	function convertCurrencyCtrl($scope, data, convertCurrencyServices) {

        $scope.curData = [];
        $scope.curData = data.data;

        $scope.data = {
	      availableOptions: [],
	      templateSale: [],
	      templateBuy: [],
	      listCurrency:[],
	      input: 0,
	      fromSelected: 'UAH',
	      toSelected: 'USD',
	      result:0,
	    };

	    convertCurrencyServices.getTable($scope);
        convertCurrencyServices.getCurrencies($scope);
        convertCurrencyServices.calculateCurrency($scope);

        $scope.calculateCurrency = function() {
        	convertCurrencyServices.calculateCurrency($scope);
        }
}


})();
