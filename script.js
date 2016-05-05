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
	row.style.background = "rgb(255,255,255)";
	row.style.float = "left";
	row.className = "row"
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
	rowTwo.className = "row"
body.appendChild(rowTwo);


var gradient = (19/100)/2;
for (var i=0; i< 81; i++) {
	var checkerPiece = document.createElement("div");
	checkerPiece.style.width = "11.1%";
	checkerPiece.style.float = "left";
	checkerPiece.style.paddingBottom = "11.1%";
	checkerPiece.className = "flash";
	var randColorR = Math.floor(Math.random() * 255);
	var randColorB = Math.floor(Math.random() * 255);
	var randColorG = Math.floor(Math.random() * 255);
	gradient += (1/81);
	checkerPiece.style.background = `rgba( ${randColorR}, ${randColorG}, ${randColorB}, ${gradient}`;
	body.appendChild(checkerPiece);
}

var toFlash = document.getElementsByClassName("flash");

function backToColor(i, currentColor) {
	toFlash[i].style.background = currentColor;
}

function animate (toFlash) {
	for (var i = 0; i < toFlash.length; i++) {
		var currentColor = '';
		currentColor = toFlash[i].style.background;
		toFlash[i].style.background = "rgba(255,255,255,1)";
		setTimeout(backToColor, 100, i, currentColor);
	}
}
function flash () {
	setInterval(animate,2000,toFlash);
}

flash();

