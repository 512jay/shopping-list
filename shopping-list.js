// Changing he Shopping List h1 tag with javascript
document.getElementsByTagName("h1")[0].classList.add("coolTitle");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let items = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

// Creats list elements and attaches an event listner + Button
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	items = document.querySelectorAll("li");
	// since array start counting a zero the last value is lenght - 1
	addDeleteButton(items[items.length-1],items.length-1);
	createEventListner(items[items.length-1],items.length-1);
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

// clicking on a list item toggles the strikethrough
// clicking on the Delete button will remove the element
function processClick(event) {
	if(event.srcElement.firstElementChild !== null) //button has no child
  {
	event.srcElement.classList.toggle("done");
  } else {
  	deleteListItem(event.srcElement.parentNode);//Send node to delete
  }
}

function deleteListItem(node){
	node.parentNode.removeChild(node);//parent node removes child
}

// given the list item and the index i creates an listner
function createEventListner(listItem, i) {
	items[i].addEventListener("click", processClick);
}

function addDeleteButton(listItem, i) {
	// create a new button element
	var deleteButton = document.createElement("button");
	// give it some content
	var newContent = document.createTextNode("Delete");
	// add the text node to the newly created button
	deleteButton.appendChild(newContent);
	// add the newly created element and its content into the DOM
	// Get the <ul> element to insert a new node
  listItem.append(" "); // add a space for fomatting purposes
	listItem.appendChild(deleteButton);
	//deleteButton.addEventListener("click", deleteListItem);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

items.forEach(createEventListner); //listen to the original list
items.forEach(addDeleteButton);// add buttons to the original list
