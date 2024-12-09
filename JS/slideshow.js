let slideIndex = 0;
showSlides();  // Initial display of the slides

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment or reset slideIndex for next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  // Loop back to first slide if at the end

    // Deactivate all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Activate the current dot
    dots[slideIndex - 1].className += " active";
}

// Function to move slides (left or right)
function moveSlides(n) {
    slideIndex += n;  // Adjust slideIndex by the argument (next or previous)

    if (slideIndex > document.getElementsByClassName("slide").length) {
        slideIndex = 1;  // Loop back to the first slide if at the end
    } else if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("slide").length;  // Go to the last slide if at the first one
    }

    showSlides();  // Update the display of the slides
}