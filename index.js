'use strict'

const app = angular.module('followersApp', []);

app.controller('MainController', function($scope, $http){
	$scope.githubUsers = [];
	
	$scope.init = function(){
		$scope.getGithubUsers();
	}
	
	$scope.getGithubUsers = function(){
		$http.get('https://api.github.com/users?since=0').then(function(response) {
			$scope.githubUsers = response.data;
		});
	}
	
	$scope.init();
});
