
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	console.log("New List Item");
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


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


function createEventListner(item, i) {
	//console.log("in create event listner");
  arrayOfListItems[i].addEventListener("Click",toggleDone);
}

function toggleDone(item, i){
	console.log("ToggleDone");
	arrayOfListItems[i].classList.toggle("done");
}


// Loop through the currently created list items
var arrayOfListItems = document.querySelectorAll("li");
console.log(arrayOfListItems);
arrayOfListItems.forEach(createEventListner);

