function setObjectPos(obj, x, y){
	$(obj).css({
		'margin-top':''+y+'px'	
	});
	$(obj).css({
		'margin-left':''+x+'px'	
	});
}
function setObjectSize(obj, w, h){
	$(obj).css({
		'width':''+w+'px'
	});
	$(obj).css({
		'height':''+h+'px'
	});
}
function getRandomNumber(min, max){
	while(true){
		var rd = Math.floor(Math.random() * (max - min + 1)) + min;
		if(rd%redux_up_step == 0){
			return rd;
		}
	}
}
function setBackgroundColor(obj, color){
	$(obj).css({
		'background-color':''+color
	});
}

function moedaNoResetFunction() {

}
function addMoedaToGameBox(){
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
	console.log(moeda_length);
	moeda_length++;
	moeda[moeda_length-1] = new moeda(
			randx,
			randy,
			'gold'
	);
	$("#game").html($("#game").html()+'<div id=\"moeda'+(moeda_length-1)+'\" class=\"moeda\"></div>');
	setObjectPos("#moeda"+(moeda_length-1), moeda[(moeda_length-1)].x, moeda[(moeda_length-1)].y);
}
