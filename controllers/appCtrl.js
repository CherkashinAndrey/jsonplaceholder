
(function() {

  angular
    .module('app')
    .controller('appCtrl', appCtrl);

  function appCtrl($scope, data) {
  	$scope.users = data.data;
  	console.log('all users ', data);

  	// url = {
  	// 	url: "http://jsonplaceholder.typicode.com/users",
  	// 	id: "1",
  	// }

	// $scope.allInfoUsers = function(id) {
	// 	//вызвать сервис
	// }

  }

})();
