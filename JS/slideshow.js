let slideIndex = 1;  // Start med første slide
showSlides(slideIndex);  // Vis den første sliden

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Sørg for at slideIndex holder seg innenfor gyldig rekkevidde
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Fjern 'active' fra alle slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Deaktiver alle punktene
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Vis den nåværende sliden
    slides[slideIndex - 1].classList.add("active");

    // Aktiver det nåværende punktet
    dots[slideIndex - 1].classList.add("active");
}

// Funksjon for å flytte slides (venstre eller høyre)
function moveSlides(n) {
    slideIndex += n;  // Juster slideIndex med argumentet (neste eller forrige)
    showSlides(slideIndex);  // Oppdater visningen av slides
}