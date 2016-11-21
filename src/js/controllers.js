app.controller('addCardCtrl', function() { // add-card modal box

	$scope.modalBox = $('[data-trigger="add-card-modal"]');

	$scope.$on('$routeChangeSuccess', function () {
		$scope.modalBox.easyModal({overlay : 0.4,	onClose: function(){
			$window.location.assign('/#/programacao');
		}});
		$scope.modalBox.trigger('openModal');
	});

	$('[data-trigger="close-modal-box"]').on('click', function() {
		$scope.modalBox.trigger('closeModal');
	});

});

app.controller('programacaoCtrl', function($scope, $http, $controller, $location) {
	$http.get("js/data/data.json")
    .success(function(data) {
        $scope.data = data;
    });
});

app.controller('navCtrl', function($scope, $location) {

	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path(); // check if 
	};

  $scope.menuToggle = function ($event) {
		$($event.target).parent().siblings('.menu').toggle('fast');
  };
});