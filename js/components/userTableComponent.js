
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
			$scope.user = $scope.githubUsers[index].login;
			$scope.userUrl = $scope.githubUsers[index].html_url;
			$scope.userAvatarUrl = $scope.githubUsers[index].avatar_url;
			$scope.followers = [];
			$http.get($scope.githubUsers[index].followers_url).then(function(response) {
				$scope.followers = response.data;
			});
			var modalInstance = $uibModal.open({
				animation: true,
				backdrop: true,
				templateUrl: 'html/templates/followerList.html',
				scope: $scope
			});
		}
		
		$scope.init();
	}
});