function loop(){
	setTimeout(function loopContinuacao(){
		resetTime();
		loop();
	},1000);
}

function resetTime(){
	if(resetCache > 0){
		$(".reset-time").html(resetCache);
		resetCache--;
	}
	else if(resetCache <= 0){
		resetCache = resetTimer;
		$(".reset-time").html(resetTime);
		redefineAll();
		setBackgroundColor("#game", background_color);
	}
	if(resetCache == 1){
		setBackgroundColor("#game", "yellow");
	}
	if(resetCache == 0){
		setBackgroundColor("#game", "red");
	}
	bonusBoxTimer();
}