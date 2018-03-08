function startKeyManager(){
	$(document).keypress(function(e){
		console.log(e.keyCode);
		if(e.wich == 13 || e.keyCode == 13){
			alert('A tecla ENTER foi pressionada');
		}
		});
	}
document.onkeypress = keypress;
function keypress(key_event){
	if(game_interaction_status){
		var key_code = key_event.keyCode;
		switch(key_code){
			case 37:
			case 97:
			case 52:
				esquerda();
				break;
			case 38:
			case 119:
			case 56:
				cima();
				break;
			case 100:
			case 39:
			case 54:
				direita();
				break;
			case 40:
			case 115:
			case 53:
			case 50:
				baixo();
				break;
			case 27:
				fecharAberto();
				break;
		}
	}
}
function esquerda(){
	if(redux_width >= redux_width_min){
		redux_width = redux_width-redux_up_step;
		$(".redux").css({
			'margin-left':''+redux_width+'px'
		});
		checkPos();
	}
}

function direita(){
	if(redux_width <= redux_width_max){
		redux_width = redux_width+redux_up_step;
		$(".redux").css({
			'margin-left':''+redux_width+'px'
		});
		checkPos();
	}
}

function cima(){
	if(redux_heigth >= redux_heigth_min){
		redux_heigth = redux_heigth-redux_up_step;
		$(".redux").css({
			'margin-top':''+redux_heigth+'px'
		});
		checkPos();
	}
}

function baixo(){
	if(redux_heigth <= redux_heigth_max){
		redux_heigth = redux_heigth+redux_up_step;
		$(".redux").css({
			'margin-top':''+redux_heigth+'px'
		});
		checkPos();
	}
}


function fecharAberto(){
	extra_close();
}