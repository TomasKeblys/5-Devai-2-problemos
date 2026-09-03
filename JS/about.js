"use strict"


const buttonList = document.querySelectorAll(".d_grid button")

console.log(buttonList)

buttonList[0].onclick = function(event) {
    event.stopPropagation();
    if (event.target.parentElement.style.zIndex == Number("-100")){
        console.log(event.target.parentElement.style.zIndex)
        event.target.parentElement.style.zIndex = "100"
        console.log(event.target.parentElement.style.zIndex)
    } else {
        event.target.parentElement.style.zIndex = "-100"
    }

    event.target.parentElement.style.zIndex = "-100"
    console.log(event.target.parentElement)
}




