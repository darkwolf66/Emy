function extra_open() {
	$(".extra-open").attr('onclick',"extra_close()");
	$(".extra-open").css({"width":"500px"});
	$(".extra-open").html("Upgrades >");
	$(".extra-box").show();
}
function extra_close(){
	$(".extra-open").attr('onclick',"extra_open()");
	$(".extra-open").css({"width":"200px"});
	$(".extra-open").html("Upgrades <");
	$(".extra-box").hide();
}
function opts_open() {
	$(".opts-open").attr('onclick',"opts_close()");
	$(".opts-open").css({"width":"500px"});
	$(".opts-open").html("Options <");
	$(".opts-box").show();
}
function opts_close(){
	$(".opts-open").attr('onclick',"opts_open()");
	$(".opts-open").css({"width":"200px"});
	$(".opts-open").html("Options >");
	$(".opts-box").hide();
}
