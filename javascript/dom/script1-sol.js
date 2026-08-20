// a) Change the text of the h1 element
document.getElementById("main-title").textContent = "DOM Manipulation Exercise";

// b) Change the background color of all paragraph elements
const paragraphs = document.getElementsByClassName("paragraph");
for (let p of paragraphs) {
  p.style.backgroundColor = "yellow";
}

// c) Add a new list item
const list = document.getElementById("list");
const newItem = document.createElement("li");
newItem.textContent = "New Item";
list.appendChild(newItem);

// d) Add event listener to the "Add Item" button
let itemCount = 4; // Start from 4 since we already have 3 items
document.getElementById("add-item").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemCount}`;
  list.appendChild(newItem);
  itemCount++;
});
