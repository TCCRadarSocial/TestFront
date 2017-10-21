var app = angular.module('myAppAssinatura', ['ngRoute']);
app.controller('ctrlGeral', function($scope,$http) {

	$scope.plans = plans;
	$scope.option = 1;
	$scope.showPlano = true;

	$scope.click = function(plan){
		$scope.currency = plan.price.currency;
		$scope.integer = plan.price.integer;
		$scope.decimal = plan.price.decimal;
		$scope.periodicy = plan.price.periodicy;
		$scope.total = plan.total;
		$scope.payments = plan.payments;

		$("#div1").removeClass("selectedRadio");
		$("#div2").removeClass("selectedRadio");
		$("#div3").removeClass("selectedRadio");

		$("#div"+plan.id).addClass("selectedRadio");
	}

	$scope.click(plans.plans[0]);


	$scope.ativaProximo = function(){
		$("#segundo").addClass("current");
		$("#primeiro").removeClass("current");
	}

});
