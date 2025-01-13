const shoppingButton = document.querySelector<HTMLButtonElement>("#shopping-button");
const inputElement = document.querySelector<HTMLInputElement>("#inputText");
const outputElement = document.querySelector("#myList");

if (shoppingButton && inputElement && outputElement) {
    shoppingButton.addEventListener("click", function () {
    const value = inputElement.value;
    // create new li elemente
    const newListElement = document.createElement("li");

    // fill element with value from input
    newListElement.textContent = value;

    // append new element to list
    // vorher
    // <ul>
    // </ul>
    // nachher
    // <ul>
    //  <li>hier value</li>
    // </ul>
    outputElement.appendChild(newListElement);

    // clear input
    inputElement.value = "";
});
}
