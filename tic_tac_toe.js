//1.first press is cross and repress not allowed on same box
//2.alternative press is round and repress is not allowed on same box
//3.have to check for game over everytime when a box is pressed
//4.if game not over continue, if game over shows alert

//3.1.rules for game over
//cross or round have to be either form row or coloumn or diagonal

//actions required
//onclick

$(document).ready(function(){
	function ticTac(){
		var symbolSelected=true;
		var selectedId;
		var possible = [[11,12,13],[21,22,23],[31,32,33],[11,21,31],[12,22,32],[13,23,33],[11,22,33],[13,22,31]];
		var crossArray = [];
		var roundArray = [];
		$(".box").on('click',function(e){

			// console.log("clicked", "cross");
			if (symbolSelected) {
				$("#"+e.target.id).addClass("cross");
				crossArray.push(Number(e.target.id));
				selectedId = e.target.id;
				console.log(selectedId);
				console.log("crossArray"+crossArray);
				symbolSelected = !symbolSelected;
				gameOver();
			} else{
				$("#"+e.target.id).addClass("round");
				roundArray.push(Number(e.target.id));
				selectedId = e.target.id;
				console.log(selectedId);
				console.log("roundArray"+roundArray);
				symbolSelected = !symbolSelected;
				gameOver();
			}
			function gameOver(){
				possible.forEach(function(data){
					checkCrossArray = _.intersectionWith(data, crossArray , _.isEqual);
					checkRoundArray = _.intersectionWith(data, roundArray , _.isEqual);
					if(checkCrossArray.length === data.length){
						// alert("Cross Wins");
						setTimeout(function() { alert("Cross Wins"); }, 50);
					}
					if(checkRoundArray.length === data.length){
						// alert("Round Wins");
						setTimeout(function() { alert("Round Wins"); }, 50);
					}
				})
			}
			$("#undo").click(function(){
				var selectedClassName = "";
				selectedClassName = document.getElementById("11").className.split(" ")[1]
				if(selectedClassName === "cross"){
					document.getElementById(selectedId).className = "box"
					crossArray.pop();
					console.log("crossArray"+crossArray);
					symbolSelected = !symbolSelected;
				}else{
					document.getElementById(selectedId).className = "box"
					roundArray.pop();
					console.log("roundArray"+roundArray);
				}
			});

		});
	}ticTac();
});


// 	$(document).ready( function(){
// 	var symbolSelected;
// 	var memoryAccess;
// 	console.log(document.getElementById("11").addEventListener("click",imageAppear));
// 	function imageAppear(){
// 		 var x = document.createElement("IMG");
//     x.setAttribute("src", "./images/cross.png");
//     x.setAttribute("width", "40vh");
//     x.setAttribute("width", "40vh");
//     x.setAttribute("position", "relative");

//     document.getElementById("11").appendChild(x);
// 	}
// })
