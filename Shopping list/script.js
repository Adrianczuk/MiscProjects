var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liAll = document.getElementsByTagName("li");

/*  */
function inputLength() {
	return input.value.length;
}

/* Create new list item */
function createListElement() {
	var li = document.createElement("li");
	li.addEventListener("click", toggleDone);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(document.createElement("button"));
	li.querySelector("button").addEventListener("click", deleteParent);
	
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(){
	this.classList.toggle("done");
}

/* delete list item button was checked in */
function deleteParent(){
	this.parentNode.parentNode.removeChild(this.parentNode);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

/* add event listeners for all current items */
for (i=0; i<liAll.length; i++){
	liAll[i].addEventListener("click", toggleDone);
	var liButton = liAll[i].querySelector("button");
	liButton.addEventListener("click", deleteParent);
}