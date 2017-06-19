
app.component('userTable', {
    templateUrl: 'html/templates/userTable.html',
    controller: function($scope,$http,$uibModal) {
		$scope.githubUsers = [];
	
		$scope.init = function(){
			$scope.getGithubUsers();
		}
		
		$scope.getGithubUsers = function(){
			$http.get('https://api.github.com/users?since=0').then(function(response) {
				$scope.githubUsers = response.data;
			});
		}
		
		$scope.viewFollowers = function(index){
			$scope.followers = [];
			$http.get($scope.githubUsers[index].followers_url).then(function(response) {
				$scope.followers = response.data;
			});
			var modalInstance = $uibModal.open({
				animation: true,
				backdrop: 'static',
				templateUrl: 'html/templates/followerList.html',
				scope: $scope
			});
		}
		
		$scope.init();
	}
});