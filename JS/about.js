"use strict"



const directors = document.querySelector(".directors");

directors.onclick = function (event) {

    if (event.target.nodeName == "BUTTON" && event.target.parentElement.classList.contains("not_flipped")) {
        let className = event.target.parentElement.className.split(" ");
        document.querySelector(`.${className[0]}`).classList.remove("not_flipped")
        document.querySelector(`.${className[0]}`).classList.add("flipped")
    } else if (event.target.nodeName == "BUTTON" && event.target.parentElement.classList.contains("flipped")) {
        let className = event.target.parentElement.className.split(" ");
        document.querySelector(`.${className[0]}`).classList.remove("flipped")
        document.querySelector(`.${className[0]}`).classList.add("not_flipped")
    }


    if (event.target.parentElement.nodeName == "BUTTON" && event.target.parentElement.parentElement.classList.contains("not_flipped")) {
        let className = event.target.parentElement.parentElement.className.split(" ");
        document.querySelector(`.${className[0]}`).classList.remove("not_flipped")
        document.querySelector(`.${className[0]}`).classList.add("flipped")
    } else if (event.target.parentElement.nodeName == "BUTTON" && event.target.parentElement.parentElement.classList.contains("flipped")) {
        let className = event.target.parentElement.parentElement.className.split(" ");
        document.querySelector(`.${className[0]}`).classList.remove("flipped")
        document.querySelector(`.${className[0]}`).classList.add("not_flipped")
    }


}



