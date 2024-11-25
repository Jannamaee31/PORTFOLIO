// Typing effect for the header text
let text = "MY PORTFOLIO";
let i = 0;
const speed = 100; // Speed of typing effect in milliseconds

function typeEffect() {
    if (i < text.length) {
        document.getElementById("portfolio-title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

// Profile picture hover effect
const profilePic = document.querySelector(".profile-pic");

profilePic.addEventListener("mouseover", function() {
    profilePic.style.transform = "scale(1.2)";
    profilePic.style.transition = "transform 0.3s ease";
});

profilePic.addEventListener("mouseout", function() {
    profilePic.style.transform = "scale(1)";
});

// Scroll reveal for "About Me" section
const aboutMeBox = document.querySelector(".box1");

window.addEventListener("scroll", function() {
    const rect = aboutMeBox.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight - 100) {
        aboutMeBox.style.opacity = 1;
        aboutMeBox.style.transform = "translateY(0)";
    } else {
        aboutMeBox.style.opacity = 0;
        aboutMeBox.style.transform = "translateY(50px)";
    }
});
