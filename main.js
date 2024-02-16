canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225

function add() {
	bg_img = new Image();
	bg_img.src = background_image
	bg_img.onload = uploadBackground;

	g_img = new Image();
	g_img.src = greencar_image
	g_img.onload = uploadgreencar;
}
function uploadBackground() {
	ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(g_img, greencar_x, greencar_y, greencar_width, greencar_height)



}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}


function left() {
	if (greencar_x > 0) {
		greencar_x = greencar_x - 10;
		uploadBackground();
		uploadgreencar();
	}

}
function right() {
	if (greencar_x < 700) {
		greencar_x = greencar_x + 10;
		uploadBackground();
		uploadgreencar();
	}
}
function up() {
	if (greencar_y > 0) {
		greencar_y  = greencar_y  - 10;
		uploadBackground();
		uploadgreencar();
	}
}
function down() {
	if (greencar_y  < 510) {
		greencar_y  = greencar_y  + 10
		uploadBackground();
		uploadgreencar();
	}
}