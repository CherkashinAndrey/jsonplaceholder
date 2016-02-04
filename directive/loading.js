
(function(){
    angular.module('app')
        .directive('loading', function (){
        return {
          restrict: 'E',
          scope: true,
          template: "<div ng-show={{load}}> loading . . . </div>",
          link: function (scope, elmement, attrs) {
               // scope.load = 'load...';
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