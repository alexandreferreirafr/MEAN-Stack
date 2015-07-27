angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http) {
	$scope.signin = function(username, password) {
		console.log('I\'m not done yet!');
		$http.post('/login', {username: username, password: password})
			.then(function(response){
				if (response.data.success) {
					console.log('login');
				} else {
					console.log('error');
				}
			});
	};
});