
(function() {

  angular
    .module('app')
    .controller('appCtrl', appCtrl)


  function appCtrl($scope, data) {
    $scope.users = data.data;
    $scope.loader = false;
    console.log('all users ', data);

  }

})();
