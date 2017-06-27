
app.component('userTable', {
    templateUrl: 'html/templates/userTable.html',
    controller: function($scope,$http,$uibModal,githubService) {
		$scope.githubUsers = [];
	
		$scope.init = () => {
			githubService.getUsers().then((users) => {
				$scope.githubUsers = users;
			});
		}
		
		$scope.viewFollowers = (index) => {
			$scope.user = $scope.githubUsers[index].login;
			$scope.userUrl = $scope.githubUsers[index].html_url;
			$scope.userAvatarUrl = $scope.githubUsers[index].avatar_url;
			$scope.followers = [];
			githubService.getFollowers($scope.githubUsers[index].followers_url).then((followers) => {
				$scope.followers = followers;
			});
			const modalInstance = $uibModal.open({
				animation: true,
				backdrop: true,
				templateUrl: 'html/templates/followerList.html',
				scope: $scope
			});
		}
	}
});