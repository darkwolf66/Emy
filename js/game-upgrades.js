function generateUpgrades(){
	$(".extra-box").html("");
	$(".extra-box").html($(".extra-box").html()+"<div id=\"upbox\" onclick=\"upgradeMoedas.upgrade()\"><div class=\"descricao\">"+upgradeMoedas.uMoedas+" moeda a mais em campo | Preço: "+upgradeMoedas.preco+" Moedas </div><div class</div>");
	$(".extra-box").html($(".extra-box").html()+"<div id=\"upbox\" onclick=\"upgradeTime.upgrade()\"><div class=\"descricao\">"+upgradeTime.tempo+" segundos a mais no tempo de reset | Preço: "+upgradeTime.preco+" Moedas </div><div class</div>");
	$(".extra-box").html($(".extra-box").html()+"<div id=\"upbox\" onclick=\"upgradeSomador.upgrade()\"><div class=\"descricao\">"+upgradeSomador.somar+" a mais por coleta | Preço: "+upgradeSomador.preco+" Moedas </div><div class</div>");
}
function addMoedas(preco, moedasadd){
	if(preco >= moedas){
		moeda_length = moedasadd + moeda_length;
		startMoedaPos();
	}
}
function addDobro(preco){
	if(preco >= moedas){
		moeda_length = 2 * moeda_length;
	}

}

function uMoedasEmCampo(uMoedas, preco){
	this.uMoedas = uMoedas;
	this.preco = preco;
}

function uUpgradeTime(tempo, preco){
	this.preco = preco;
	this.tempo = tempo;
}

function uSomador(somar, preco){
	this.preco = preco;
	this.somar = somar;
}

//moedas, preco
var upgradeMoedas = new uMoedasEmCampo(1, 1);
upgradeMoedas.upgrade = function upgrade(){
	if(upgradeMoedas.preco <= moedas){
		moedas = moedas - upgradeMoedas.preco;
		refreshContadorDeMoedas();
		for (var i = upgradeMoedas.uMoedas - 1; i >= 0; i--) {
			addMoedaToGameBox();
		}
		upgradeMoedas.uMoedas = upgradeMoedas.uMoedas * 2;
		upgradeMoedas.preco = upgradeMoedas.preco * 10;
		generateUpgrades();
	}
}
var upgradeTime = new uUpgradeTime(1, 1);
upgradeTime.upgrade = function upgrade(){
	if(upgradeTime.preco <= moedas){
		moedas = moedas - upgradeTime.preco;
		refreshContadorDeMoedas();
		resetTimer = resetTimer + upgradeTime.tempo;

		upgradeTime.tempo = upgradeTime.tempo * 2;
		upgradeTime.preco = upgradeTime.preco + 30;
		generateUpgrades();
	}
}

var upgradeSomador = new uSomador(1, 1);
upgradeSomador.upgrade = function upgrade(){
	if(upgradeSomador.preco <= moedas){
		moedas = moedas - upgradeSomador.preco;
		refreshContadorDeMoedas();
		moedas_somador = moedas_somador + upgradeSomador.somar;

		upgradeSomador.somar = upgradeSomador.somar + 1;
		upgradeSomador.preco = upgradeSomador.preco + 30;
		generateUpgrades();
	}
}
