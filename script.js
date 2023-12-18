document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Tack för ditt meddelande!");
    // Här kan du lägga till mer logik för att hantera formuläret
});

document.getElementById("menu-toggle").addEventListener("click", function() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar-open") {
        navbar.className = "";
    } else {
        navbar.className = "navbar-open";
    }
});

window.addEventListener('scroll', function() {
    var portrait = document.querySelector('.portrait');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > windowHeight / 3) {
        portrait.style.opacity = '0'; // Minskar opaciteten till 0 för att skapa fade-out-effekt
    } else {
        portrait.style.opacity = '1'; // Återställer full opacitet
    }
});

document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);
        targetElement.style.display = targetElement.style.display === 'none' ? 'block' : 'none';
    });
});

document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
    });
    button.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
    });
});





