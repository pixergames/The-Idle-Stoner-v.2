            var score = 0;
			var scorePerSecond = buzzers + pothogs * 5;
			var clickingPower = 1;
		
			var buzzerCost = 15;
			var buzzers = 0;
		
			var pothogCost = 100;
			var pothogs = 0;
			
			var cannacatCost = 1000;
			var cannacats = 0;

            //building functions
		
		
			function buyBuzzer() {
				if (score >= buzzerCost) {
				score = score - buzzerCost;
				buzzers = buzzers + 1;
				buzzerCost = Math.round(buzzerCost * 1.15);
			
				document.getElementById("score").innerHTML = score;
				document.getElementById("buzzercost").innerHTML = buzzerCost;
				document.getElementById("buzzers").innerHTML = buzzers;
				updateScorePerSecond();
			
				}
				
			}	
			
		
			function buyPothog() {
				if (score >= pothogCost) {
				score = score - pothogCost;
				pothogs = pothogs + 1;
				pothogCost = Math.round(pothogCost * 1.15);
				
				document.getElementById("score").innerHTML = score;
				document.getElementById("pothogcost").innerHTML = pothogCost;
				document.getElementById("pothogs").innerHTML = pothogs;
				updateScorePerSecond();
				
				}
			
			}
			
			
			function buyCannacat() {
				if (score >= cannacatCost) {
				score = score - cannacatCost;
				cannacats = cannacats + 1;
				cannacatCost = Math.round(cannacatCost * 1.15);
			
				document.getElementById("score").innerHTML = score;
				document.getElementById("cannacatcost").innerHTML = cannacatCost;
				document.getElementById("cannacats").innerHTML = cannacats;
				updateScorePerSecond();
			
				}
				
            
			}
            
            

            
			
			function addToScore(amount) {
				score = score + amount;
				document.getElementById("score").innerHTML = score;
				
			}
		
			function updateScorePerSecond() {
				scorePerSecond = buzzers + pothogs * 5 + cannacats * 70;
				document.getElementById("scorePerSecond").innerHTML = scorePerSecond;
            
			}

            function loadGame() {
                var savedGame = JSON.parse(localStorage.getItem("gameSave"));
                if (typeof savedGame.score !== "undefined") score = savedGame.score;
                if (typeof savedGame.scorePerSecond !== "undefined") scorePerSecond = savedGame.scorePerSecond;
                if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
                if (typeof savedGame.buzzerCost !== "undefined") buzzerCost = savedGame.buzzerCost;
                if (typeof savedGame.buzzers !== "undefined") buzzers = savedGame.buzzers;
                if (typeof savedGame.pothogCost !== "undefined") pothogCost = savedGame.pothogCost;
                if (typeof savedGame.pothogs !== "undefined") pothogs = savedGame.pothogs;
                if (typeof savedGame.cannacatCost !== "undefined") cannacatCost = savedGame.cannacatCost;
                if (typeof savedGame.cannacats !== "undefined") cannacats = savedGame.cannacats;

            }

            function saveGame() {
                var gameSave = {
                    score: score,
                    scorePerSecond: scorePerSecond,
                    clickingPower: clickingPower,
                    buzzerCost: buzzerCost,
                    buzzers: buzzers,
                    pothogCost: pothogCost,
                    pothogs: pothogs,
                    cannacatCost: cannacatCost,
                    cannacats: cannacats
                };
                localStorage.setItem("gameSave", JSON.stringify(gameSave));
            }

            window.onload = function() {
                loadGame();
                updateScorePerSecond();
                document.getElementById("score").innerHTML = score;
                document.getElementById("buzzercost").innerHTML = buzzerCost;
				document.getElementById("buzzers").innerHTML = buzzers;
				document.getElementById("pothogcost").innerHTML = pothogCost;
				document.getElementById("pothogs").innerHTML = pothogs;
				document.getElementById("cannacatcost").innerHTML = cannacatCost;
				document.getElementById("cannacats").innerHTML = cannacats;
            };
			
		
			setInterval (function() {
				score = score + buzzers;
				score = score + pothogs * 5;
				score = score + cannacats * 70;
				document.getElementById("score").innerHTML = score;

                document.title = score + " weedcrumbs - The Idle Stoner";

			}, 1000); // 1000ms = 1 second

            setInterval (function() {
                saveGame();
            
            }, 30000); //30000ms = 30 seconds
			
			
			
			

        