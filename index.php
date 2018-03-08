<!DOCTYPE html>
<html>
	<head>
		<title>Emy</title>
		<meta charset="UTF-8">
		<meta name="description" content="Quanto de moedas você consegue? Tente 1 2 3 vezes. Vai que consegue.">
		<meta name="keywords" content="game, jogo, emy, playemy, ml, jogar, jogo, online, navegador, browser, javascript, beta, desenvolvimento">
		<meta name="author" content="William Moraes, vulgo darkwolf_66 - will.moraes.96@gmail.com">
		<link rel="stylesheet" type="text/css" href="./styles/style.css">
		<script src="./js/jquery-2.2.0.min.js"></script>
		<script src="./js/game-vars.js"></script>
		<script src="./js/game-objects.js"></script>
		<script src="./js/game-upgrades.js"></script>
		<script src="./js/bonus-box.js"></script>
		<script src="./js/keys.js"></script>
		<script src="./js/game-general-functions.js"></script>
		<script src="./js/game-lib.js"></script>
		<script src="./js/runnable.js"></script>
		<script src="./js/extralibs.js"></script>
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-74641461-1', 'auto');
		  ga('send', 'pageview');

		</script>
	</head>

	<body>
		<div id="game-box">
			<div id="game" onselectstart='return false'></div>
			<div id="info">
				<div class="game-infos">
					<div class="coin" onselectstart='return false'>
						<div class="contador-label">Moedas:</div>
						<div class="contador"></div>
					</div>
					<div class="reset" onselectstart='return false'>
						<div class="reset-label">Reset em:</div>
						<div class="reset-time">0</div>
					</div>
				</div>
				<div class="extra-infos">
					<div class="tutorial" onselectstart='return false'>Para se mover use W A S D ou 8 4 5 6</div>
					<div class="donate"> <div class="donate-label" onselectstart='return false'>Doe :)</div><div class="btcAdress">1CsB29gPwKMtHyUFo3e7pws3VT4dGEXe8h</div></div>
					<div class="copyright" onselectstart='return false'>EM BETA! PlayEmy © 2016 Todos direitos reservados. Versão 0.3</div>
				</div>
			</div>
		</div>
		<div class="extra-open" onclick="extra_open()" onselectstart='return false'>Upgrades <</div>
		<div class="extra-box" onselectstart='return false'></div>
		<div class="opts-open" onclick="opts_open()" onselectstart='return false'>Options ></div>
		<div class="opts-box" onselectstart='return false'></div>

		<div class="bonus-box" onselectstart='return false'>
			<div class="bonus-ad">
				<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
				<!-- will-boxad -->
				<ins class="adsbygoogle"
				     style="display:inline-block;width:250px;height:250px"
				     data-ad-client="ca-pub-4178226318677386"
				     data-ad-slot="9852180151"></ins>
				<script>
				(adsbygoogle = window.adsbygoogle || []).push({});
				</script>
				<div class="bonus-timer-close">Espere <div class="bonus-timetoclose"></div> segundos para fechar</div>
			</div>
			<div class="bonus-buttom" onclick="bonusButtomClick()">Aperte <div class="bonus-contador"></div>x para pegar o bonus e continuar</div>
		</div>
		<div class="ad1">
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<!-- will-emy -->
			<ins class="adsbygoogle"
			     style="display:inline-block;width:250px;height:600px"
			     data-ad-client="ca-pub-4178226318677386"
			     data-ad-slot="6399186159"></ins>
			<script>
			(adsbygoogle = window.adsbygoogle || []).push({});
			</script>
		</div>
		<div class="ad2">
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<!-- will-emy -->
			<ins class="adsbygoogle"
			     style="display:inline-block;width:250px;height:600px"
			     data-ad-client="ca-pub-4178226318677386"
			     data-ad-slot="6399186159"></ins>
			<script>
			(adsbygoogle = window.adsbygoogle || []).push({});
			</script>
		</div>
	</body>
</html>