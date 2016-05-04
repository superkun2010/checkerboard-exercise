// Your JS goes here

var body = document.body;

var switchNum = 0;
for (var i=0; i< 81; i++) {
	var checkerPiece = document.createElement("div");
	checkerPiece.style.width = "11.1%";
	checkerPiece.style.float = "left";
	checkerPiece.style.paddingBottom = "11.1%";
	if (switchNum === 0) {
		checkerPiece.style.background = "black";
		switchNum = 1;
	} else if (switchNum === 1) {
		checkerPiece.style.background = "red";
		switchNum = 0;
	}
	body.appendChild(checkerPiece);
}

var row = document.createElement("div");
	row.style.width = "100%";
	row.style.paddingBottom = "20px";
	row.style.background = "White";
	row.style.float = "left";
body.appendChild(row);

for (var i=0; i< 81; i++) {
	var checkerPiece = document.createElement("div");
	checkerPiece.style.width = "11.1%";
	checkerPiece.style.float = "left";
	checkerPiece.style.paddingBottom = "11.1%";
	var randColorR = Math.floor(Math.random() * 255);
	var randColorB = Math.floor(Math.random() * 255);
	var randColorG = Math.floor(Math.random() * 255);
	checkerPiece.style.background = `rgb( ${randColorR}, ${randColorG}, ${randColorB}`;
	body.appendChild(checkerPiece);
}

var rowTwo = document.createElement("div");
	rowTwo.style.width = "100%";
	rowTwo.style.paddingBottom = "20px";
	rowTwo.style.background = "White";
	rowTwo.style.float = "left";
body.appendChild(rowTwo);


var gradient = (1-(81/100))/2;
for (var i=0; i< 81; i++) {
	var checkerPiece = document.createElement("div");
	checkerPiece.style.width = "11.1%";
	checkerPiece.style.float = "left";
	checkerPiece.style.paddingBottom = "11.1%";
	var randColorR = Math.floor(Math.random() * 255);
	var randColorB = Math.floor(Math.random() * 255);
	var randColorG = Math.floor(Math.random() * 255);
	gradient += (1/81);
	checkerPiece.style.background = `rgba( ${randColorR}, ${randColorG}, ${randColorB}, ${gradient}`;
	body.appendChild(checkerPiece);
}
