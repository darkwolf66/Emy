$(document).ready(function(){
	$("#game").html("<div class='redux'></div>");
		startPositions();
		refreshContadorDeMoedas();
		startDeadPoints();
		startColorts();
		loop();
		generateUpgrades();
		startKeyManager();
});
function startColorts(){
	setBackgroundColor(".redux", redux_color);
	setBackgroundColor(".dead", deadPointColor);
}
function startPositions(){
	startReduxPos();
	startMoedaPos();
}
function startObjectsSize(){
	setObjectSize(".redux", redux_width, redux_heigth);
}
function startMoedaPos(){
	for (var i = moeda_length - 1; i >= 0; i--) {
		while(true){
			randy = getRandomNumber(redux_heigth_max, redux_heigth_min);
			randx = getRandomNumber(redux_width_max, redux_width_min);
			if(randy != redux_heigth && randx != redux_width){
				break;
			}
		}
		moeda[i] = new moeda(
			randx,
			randy,
			'gold'
		);
		$("#game").html($("#game").html()+'<div id=\"moeda'+i+'\" class=\"moeda\"></div>');
		setObjectPos("#moeda"+i, moeda[i].x, moeda[i].y);
	}
}

function resetMoedaPos(){
	for (var i = moeda_length - 1; i >= 0; i--) {
		while(true){
			randy = getRandomNumber(redux_heigth_max, redux_heigth_min);
			randx = getRandomNumber(redux_width_max, redux_width_min);
			for (var i = deadPointsLenght - 1; i >= 0; i--) {
				if(randy != redux_heigth && randx != redux_width){
					break;
				}
			}
		}
		moeda[i].x = randx;
		moeda[i].y = randy;
		setObjectPos("#moeda"+i,moeda[i].x,moeda[i].y);
	};
}
function resetOneMoedaPos(moedaid){
		while(true){
			randy = getRandomNumber(redux_heigth_max, redux_heigth_min);
			randx = getRandomNumber(redux_width_max, redux_width_min);
				if(randy != redux_heigth && randx != redux_width && randx){
					break;
				}
		}
		moeda[moedaid].x = randx;
		moeda[moedaid].y = randy;
		setObjectPos("#moeda"+moedaid,moeda[moedaid].x,moeda[moedaid].y);
}

function startReduxPos(){
	redux_width = (redux_width_max-redux_width_min)/2;
	redux_heigth = (redux_heigth_max-redux_heigth_min)/2;
	setObjectPos(".redux", redux_width, redux_heigth);
}

function startDeadPoints(){
	for (var i = deadPointsLenght - 1; i >= 0; i--) {
		var randx;
		var randy;
		while(true) {
			var cond = true;
			randx = getRandomNumber(redux_width_max, redux_width_min);
			randy = getRandomNumber(redux_heigth_max, redux_heigth_min);
			for (var g = moeda_length - 1; g >= 0; g--) {
				if(randx == moeda[g].x && randy == moeda[g].y){
					cond  = false;
 					break;
				}
			}
			if(cond){
				break;
			}
		}
		deadPoints[i] = new deadPoint(
			randx,
			randy,
			'white'
		);
		$("#game").html($("#game").html()+'<div id=\"dead'+i+'\" class=\"dead\"></div>');
		setObjectPos("#dead"+i, deadPoints[i].x, deadPoints[i].y);
	};
}

function redefineDeadPoints(){
	for (var i = deadPoints.length - 1; i >= 0; i--) {
		deadPoints[i].x=getRandomNumber(redux_width_max, redux_width_min);
		deadPoints[i].y=getRandomNumber(redux_heigth_max, redux_heigth_min);
		setObjectPos("#dead"+i,deadPoints[i].x,deadPoints[i].y);
	};
}

function refreshContadorDeMoedas(){
	$(".contador").html(moedas);
}

function checkMoedaPos(){
	if(!moedaNoReset){
		for (var i = moeda_length - 1; i >= 0; i--) {
			if(moeda[i].x == redux_width && moeda[i].y == redux_heigth){
				resetOneMoedaPos(i);
				moedas = moedas_somador + moedas;
				refreshContadorDeMoedas();
				redefineDeadPoints();
				break;
			}
		}
	}else{
		moedaNoResetFunction();
	}
	
}

function checkDeadPos(){
	for (var i = deadPoints.length - 1; i >= 0; i--) {
		if(deadPoints[i].x == redux_width && deadPoints[i].y == redux_heigth){
			redefineDeadPoints();
			moedas = moedas - deadPointPenalidade;
			refreshContadorDeMoedas();
		}
	}
}
function redefineAll(){
	resetMoedaPos();
	redefineDeadPoints();
}

function checkPos(){
	checkMoedaPos();
	checkDeadPos();
}
