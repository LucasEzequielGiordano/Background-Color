let btnRandom = document.getElementById("btnRandom")
let colorChange = document.getElementById("colorChange")
let body = document.getElementById("body")

// window.textContent = getDataStorage()


btnRandom.addEventListener("click", () => {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hexColors[traverseHexColors()]
    }
    colorChange.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    setDataStorage(hexColor)
})


let backgroundStorage = getDataStorage()
backgroundStorage === null ? document.body.style.backgroundColor = null : document.body.style.backgroundColor = backgroundStorage