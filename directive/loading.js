
(function(){
    angular
      .module('app')
      .directive('loading', function ($rootScope, loadingService) {
        return {
          restrict: 'E',
          scope: true,
          template: "<div class='loader' ng-show='load'> <div class='loader-content' > </div></div>",
          link: function ($scope) {
            loadingService.connectLoader(function (loading) {
              $scope.load = loading;
            });

          }
        };

      });

})()





































// (function(){
//     angular.module('loader', [])
//     .directive('loading',   ['$http', '$rootScope' ,function ($http, $rootScope){
//         return {
//             link: function (scope, elm, attrs)
//             {
//                 console.cog('derectiva loader');
//             }
//         };

//     }]);
// })()

// angular.module('app', [])
//   .directive('loading', function () {
//       return {
//         restrict: 'E',
//         replace:true,
//         template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
//         link: function (scope, element, attr) {
//               scope.$watch('loading', function (val) {
//                   if (val)
//                       $(element).show();
//                   else
//                       $(element).hide();
//               });
//         }
//       }
//   })
