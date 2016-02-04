
(function() {

  angular
    .module('app')
    .service('loadingService', loadingService);

  function loadingService($rootScope) {
    return {
      connectLoader: function (cb) {
        this.loaderCb.push(cb);
      },

      loaderCb: [],

      initLoading: function () {
        var that = this;
        $rootScope.$on('$stateChangeStart', function() {
          console.log('stateChangeStart')
          that.isLoading = true;

          if (that.loaderCb.length) {
            that.loaderCb.forEach(function (fn) {
              fn(that.isLoading);
            })
          }

        });

        $rootScope.$on('$stateChangeSuccess', function() {
          console.log('stateChangeSuccess');
          that.isLoading = false;

          if (that.loaderCb.length) {
            that.loaderCb.forEach(function (fn) {
              fn(that.isLoading);
            })
          }

        });
      },

      isLoading: false
    }
  }

})();
