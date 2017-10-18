var app = angular.module('myAppAssinatura', ['ngRoute']);
app.controller('ctrlGeral', function($scope,$http) {

    $scope.readJson = function(){
		$.getJSON("data.json", function( data ) {
		    console.log(data);
		});
	}

	$scope.readJson();



});