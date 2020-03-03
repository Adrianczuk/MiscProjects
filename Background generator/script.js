var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

/* Sets gradient and displays current linear-gradient */
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	console.log(Math.floor(Math.random() * 256));
}

/*Creates and returns random hex color value*/
function randomHex() {
	var hex = Math.floor(Math.random() * 256).toString(16);
	if (hex.toString().length < 2){
		hex = "0" + hex;
	}
	return hex;

}

function randomGradient() {
	color1.value = "#" 
		+ randomHex()
		+ randomHex()		
		+ randomHex()
	color2.value = "#" 
		+ randomHex()
		+ randomHex()
		+ randomHex()
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);