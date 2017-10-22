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

	$scope.valida = function(){

		$scope.erros = [];

		if($("#nr_cartao").val() == ""){
			$scope.erros.push("Número do cartão")
		}else{
			var regexCartao = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})|(606282\d{10}(\d{3})?)|(3841\d{15})$/;
			if(!$("#nr_cartao").val().match(regexCartao)){
				$scope.erros.push("Número do cartão - digite um cartão válido")
			}
		}

		if($("#mes").val() == ""){
			$scope.erros.push("Mês")
		}

		if($("#ano").val() == ""){
			$scope.erros.push("Ano")
		}

		if($("#nome_titular").val() == ""){
			$scope.erros.push("Nome do titular")
		}

		if($("#cod_seguranca").val() == ""){
			$scope.erros.push("Código de segurança")
		}else{

		}

		if($scope.erros.length == 0){
			$scope.showProxPasso=false;
			$scope.showFinal=true;
		}		
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

function upperCaseF(a){
    setTimeout(function(){
        a.value = a.value.toUpperCase();
    }, 1);
}
