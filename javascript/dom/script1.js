let h1Elem = document.querySelector("h1");
h1Elem.textContent = "DOM Manipulation Exercise";
let pElems = document.querySelectorAll("p");
for (let pElem of pElems) {
  pElem.style.backgroundColor = "yellow";
}
let ulElem = document.querySelector("ul");
let liElem = document.createElement("li");
ulElem.appendChild(liElem);
liElem.textContent = "New Item";
let addBtn = document.querySelector("#add-item");
let order = 4;
addBtn.addEventListener("click", function () {
  let liElem = document.createElement("li");
  ulElem.appendChild(liElem);
  liElem.textContent = `Item ${order}`;
  order++;
});
