
app.service('githubService', function($q,$http) {
	
	const userListUrl = 'https://api.github.com/users?since=0';

    this.getUsers = function () {
		var deferred = $q.defer();
		var users;
		$http.get(userListUrl).then(function(response) {
			deferred.resolve(response.data);
		}, function(error) {
			deferred.reject(error);
		});
		users = deferred.promise;
		return $q.when(users);
    }
	
	this.getFollowers = function (followersUrl) {
		var deferred = $q.defer();
		var followers;
		$http.get(followersUrl).then(function(response) {
			deferred.resolve(response.data);
		}, function(error) {
			deferred.reject(error);
		});
		followers = deferred.promise;
		return $q.when(followers);
	}
	
});