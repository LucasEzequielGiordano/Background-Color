// declaration of array
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// declaration of function to traverse array
function traverseHexColors() {
    return Math.floor(Math.random() * hexColors.length);
}

// declaration of functions in localStorage
function getDataStorage() {
    return colorSaved = JSON.parse(localStorage.getItem("colorInStorage")) || [];
}

function setDataStorage(colorSaved) {
    localStorage.setItem("colorInStorage", JSON.stringify(colorSaved))
}