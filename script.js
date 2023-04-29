// *********************************************************************************************************
// ************************************    MENU BURGER     *************************************************
// *********************************************************************************************************

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// *********************************************************************************************************
// *************************************    CALCUL IMC     *************************************************
// *********************************************************************************************************

function calcul(){
    let taille = document.getElementById("taille").value / 100;
    let poids = document.getElementById("poids").value;

    let imc = poids / (taille * taille);
    let imcFinal = imc.toFixed(2);


    if (taille == 0) {
        document.getElementById("taille").placeholder = "Veuillez renseigner votre taille";
    }

    else if (poids == 0) {
        document.getElementById("poids").placeholder = "Veuillez renseigner votre poids"
    }

    else {
        document.getElementById("imcresult").innerHTML = "Votre IMC est de " + imcFinal;

        document.getElementById("taille").placeholder = "kg"
        document.getElementById("poids").placeholder = "cm"

        if (imcFinal < 18.5) {
        document.getElementById("imcresult").style.color = "#94bbe9";
    }

    else if (imcFinal >= 18.5 && imcFinal <= 25){
        document.getElementById("imcresult").style.color = "#abe994";

    }

    else if (imcFinal >= 25 && imcFinal <= 30){
        document.getElementById("imcresult").style.color = "#e9a535";

    }

    else if (imcFinal >= 30 && imcFinal <= 40){
        document.getElementById("imcresult").style.color = "#f57c20";
    }

    else if (imcFinal > 40){
        document.getElementById("imcresult").style.color = "#f52020";
        }
    }
}  

// *********************************************************************************************************
// **********************************    SCROLL REVEAL     *************************************************
// *********************************************************************************************************

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home-gauche, .contact-gauche, .contact-droite, .exercice-box, .exercice-description`);
// sr.reveal(`.home-image`, {delay: 700, origin: 'bottom'});
sr.reveal(`.sponsor1, .programme-card1, .exercice-gauche, .exercice-milieu, .exercice-droite`, {interval: 100});
sr.reveal(`.imc-gauche`, {origin: 'left'});
sr.reveal(`.imc-droite`, {origin: 'right'});