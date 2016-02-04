
(function() {

  angular
    .module('app')
    .controller('userCtrl', userCtrl)


  function userCtrl($scope, data) {
    // $scope.load = true;

    $scope.users = data.data;
    // $scope.loader = false;
    console.log('all users ', data);
  }

})();
