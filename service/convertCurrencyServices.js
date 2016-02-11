  (function() {

    angular
    .module('app')
    .factory('convertCurrencyServices', convertCurrencyServices)
    .constant('URL_CURRENCY', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

    function convertCurrencyServices($http, URL_CURRENCY) {
      return {
       getConvertCurrency: function () {
        return $http({
          method: 'GET',
          url: URL_CURRENCY,
          }).then(
          function (result) {
            return result;
          },
          function (error) {
            console.log(error);
          }
          );
        },

        getTable: function(scope){
          scope.curData.forEach(function(el) {
            scope.data.listCurrency.push(el['ccy']);
          })
          scope.curData.forEach(function(el) {
            scope.data.templateSale.push(el['sale']);
          })
          scope.curData.forEach(function(el) {
            scope.data.templateBuy.push(el['buy']);
          })
        },

        getCurrencies: function(scope){
          scope.data.availableOptions.push(scope.curData[0]['base_ccy']);
          scope.curData.forEach(function(el) {
            scope.data.availableOptions.push(el['ccy']);
          })
        },

        calculateCurrency: function(scope){
          var inputNumber = scope.data.input;
          var currencyFrom;
          var currencyTo;

          scope.curData.forEach(function(item) {
            if (item.ccy === scope.data.fromSelected){
              currencyFrom =  item;
            } else if (item.ccy === scope.data.toSelected){
              currencyTo = item;
            }
          });

          if (scope.data.fromSelected === scope.data.toSelected) {
            return scope.data.result = Number(scope.data.input);
          } else if (currencyFrom === undefined && currencyTo.base_ccy === scope.data.fromSelected) {
            return scope.data.result = inputNumber / currencyTo.sale;
          } else if (currencyTo === undefined && currencyFrom.base_ccy === scope.data.toSelected) {
            return scope.data.result = currencyFrom.buy * inputNumber;
          } else {
            return scope.data.result = (currencyFrom.buy * inputNumber) / currencyTo.sale;
          }
        },
      }
  }

})();