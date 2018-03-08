function bonusBoxOpen() {
	bonusBoxDie();
	$(".bonus-box").show();
	$(".bonus-buttom").show();
	$(".bonus-contador").html(bonus_box_count);
	game_interaction_status = false;
	bonus_box_running = true;
}

function bonusButtomClick(){
	bonus_box_count--;
	if(bonus_box_count == bonus_box_openad){
		bonus_box_openad = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
		$(".bonus-buttom").hide();
		$(".bonus-ad").show();
		bonusStartCountToDie();
	}else{
		$(".bonus-contador").html(bonus_box_count);
	}
}
function bonusStartCountToDie() {
	$(".bonus-timetoclose").html(bonus_box_count_dead);
	bonus_box_count_dead--;
	bonusDieCounting = true;
	if(bonus_box_count_dead <= 0){
		bonusBoxDie();
		bonusBoxPremiarRandom();
	}
}

function bonusBoxDie() {
	$(".bonus-ad").hide();
	$(".bonus-buttom").hide();
	$(".bonus-box").hide();
	bonus_box_time = (Math.floor(Math.random() * (20 - 10 + 1)) + 10);//*60;
	bonus_box_openad = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
	bonus_box_count_dead = bonus_box_count_dead_max;
	bonus_box_count = bonus_box_count_start;
	bonusDieCounting = false;
	game_interaction_status = true;
	bonus_box_running = false;
}

function bonusBoxPremiarRandom() {
	var premio = Math.floor(Math.random() * (26 - 1 + 1)) + 1;
	switch(premio){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
			moedas = moedas+10;
			break;
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			moedas = moedas+30;
			break;
		case 20:
		case 21:
		case 22:
		case 23:
			moedas = moedas+70;
			break;
		case 24:
		case 25:
			addMoedas(0, 1);
			break;
		case 26:
			addDobro(0);
			break;
	}
}
function bonusBoxTimer() {
	if(bonusDieCounting){
		bonusStartCountToDie();
	}else if(!bonus_box_running){
		if(bonus_box_time <= 0){
			bonus_box_time = (Math.floor(Math.random() * (30 - 10 + 1)) + 10)*60;
			bonusBoxOpen();
		}else{
			bonus_box_time--;
		}
	}
}