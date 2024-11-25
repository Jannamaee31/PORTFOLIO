document.addEventListener("DOMContentLoaded", function() {
  // Typing effect
  const typedText = "MY PORTFOLIO";
  let i = 0;
  const speed = 150;
  const header = document.querySelector('.portfolio-header h1');
  
  function typeWriter() {
      if (i < typedText.length) {
          header.innerHTML += typedText.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }
  typeWriter();

  // Theme toggle
  const themeButton = document.createElement("button");
  themeButton.textContent = "Toggle Theme";
  themeButton.classList.add("theme-toggle");
  document.body.appendChild(themeButton);
  
  themeButton.addEventListener("click", function() {
      document.body.classList.toggle("light-theme");
  });

  // Animated welcome message
  setTimeout(function() {
      const welcomeMessage = document.createElement("div");
      welcomeMessage.textContent = "Welcome to my portfolio!";
      welcomeMessage.classList.add("welcome-message");
      document.body.appendChild(welcomeMessage);
      
      setTimeout(function() {
          welcomeMessage.remove();
      }, 3000);
  }, 1000);
});
