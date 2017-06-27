
app.service('githubService', function($q,$http) {
	
	const userListUrl = 'https://api.github.com/users?since=0';

    this.getUsers = () => {
		const deferred = $q.defer();
		$http.get(userListUrl).then((response) => {
			deferred.resolve(response.data);
		}, (error) => {
			deferred.reject(error);
		});
		const users = deferred.promise;
		return $q.when(users);
    }
	
	this.getFollowers = (followersUrl) => {
		const deferred = $q.defer();
		$http.get(followersUrl).then((response) => {
			deferred.resolve(response.data);
		}, (error) => {
			deferred.reject(error);
		});
		const followers = deferred.promise;
		return $q.when(followers);
	}
	
});