// --- Add an element ---

// --- Add a Div ---

var newDiv = document.createElement('div');

// --- Add a class ---

newDiv.className= "Hello";

// --- Add an ID ---

newDiv.id = "Hello-id";

// --- Add an attribute ---

newDiv.setAttribute('title', 'Hello Div');

// --- Create text Node ---

var newDivtxt = document.createTextNode('Hello World');
//console.log(newDiv);

// --- Add text to Div ---

newDiv.appendChild(newDivtxt);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDivtxt,h1);