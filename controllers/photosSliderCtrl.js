(function() {

	angular
	.module('app')
	.controller('photosSliderCtrl', photosSliderCtrl);

	function photosSliderCtrl($scope, data) {
		console.log('dataCtrl', data);
		$scope.slides = data.data;
		
	}

})();
