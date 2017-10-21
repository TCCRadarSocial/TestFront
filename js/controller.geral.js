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

		$scope.planoEscolhidoNome = plan.name;
		$scope.planoEscolhidoTotal = $scope.total;
	}

	$scope.click(plans.plans[0]);


	$scope.ativaProximo = function(){
		$("#segundo").addClass("current");
		$("#primeiro").removeClass("current");
	}



	$scope.meses = {
    01: "Janeiro",
    02: "Fevereiro",
    03: "Março",
    04: "Abril",
    05: "Maio",
    06: "Junho",
    07: "Julho",
    08: "Agosto",
    09: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro"
	}

	var currentTime = new Date();
	var year = currentTime.getFullYear();
	$scope.anos = [];
	var i = year;

	for(i=year; i <= year+10;i++){
		$scope.anos.push(i);
	}
	console.log($scope.anos);

});

$( document ).ready(function() {
	$("#div1").addClass("selectedRadio");
});