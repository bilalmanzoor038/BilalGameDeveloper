// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Scroll reveal animation
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
