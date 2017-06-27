
app.component('userTable', {
    templateUrl: 'html/templates/userTable.html',
    controller: function($scope,$http,$uibModal,githubService) {
		$scope.githubUsers = [];
	
		$scope.init = function(){
			githubService.getUsers().then(function(users) {
				$scope.githubUsers = users;
			});
		}
		
		$scope.viewFollowers = function(index){
			$scope.user = $scope.githubUsers[index].login;
			$scope.userUrl = $scope.githubUsers[index].html_url;
			$scope.userAvatarUrl = $scope.githubUsers[index].avatar_url;
			$scope.followers = [];
			githubService.getFollowers($scope.githubUsers[index].followers_url).then(function(followers) {
				$scope.followers = followers;
			});
			var modalInstance = $uibModal.open({
				animation: true,
				backdrop: true,
				templateUrl: 'html/templates/followerList.html',
				scope: $scope
			});
		}
	}
});