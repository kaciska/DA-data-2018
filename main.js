function displayMenu() {
    let tlacitko = document.querySelector("#menu");
    if (tlacitko.style.display === "block") {
        tlacitko.style.display = "none";
    } else {
        tlacitko.style.display = "block";
    }
}

function cancelMenu() {

if (window.matchMedia("(max-width: 499px)").matches) {
    
        let tlacitko = document.querySelector("#menu");
        tlacitko.style.display = "none";
    }
  }


function displayAlca() { 
    if (window.matchMedia("(max-width: 999px)").matches) {

    let Alca = document.querySelector("#medailonek2");
    let Katka = document.querySelector("#medailonek");

    if (Alca.style.display = "none") {
        
        Katka.style.display = "block";
    }
    
    if (Katka.style.display = "none") {
        
        Alca.style.display = "block";
        
    } else {
        Alca.style.display = "block";
    }
}
}

function displayKatka() {
    if (window.matchMedia("(max-width: 999px)").matches) {
    let Alca = document.querySelector("#medailonek2");
    let Katka = document.querySelector("#medailonek");

    if (Katka.style.display = "none") {
        
        Alca.style.display = "block";
    }
    
    if (Alca.style.display = "none") {
        
        Katka.style.display = "block";
        
    } else {
        Katka.style.display = "block";
    }
} }


function displayText() {
    let text = document.querySelector("skryty1");
    text.style.visibility = "visible";
}
