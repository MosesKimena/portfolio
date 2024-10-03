const container = document.querySelector('.certificate-container');
const scrollSpeed = 400; // Adjust the scroll speed

container.addEventListener('mousemove', (event) => {
  const containerRect = container.getBoundingClientRect();
  const mouseX = event.clientX - containerRect.left;

  // Check if mouse is near the left edge
  if (mouseX < containerRect.width * 0.1) {
    container.scrollLeft -= scrollSpeed;
  }

  // Check if mouse is near the right edge
  if (mouseX > containerRect.width * 0.9) {
    container.scrollLeft += scrollSpeed;
  }
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("menu-icon").addEventListener("click", function() {
      const navbar = document.getElementById("navbar");
      if (navbar.style.display === "flex") {
          navbar.style.display = "none"; // Hide the navbar
      } else {
          navbar.style.display = "flex"; // Show the navbar
      }
  });
});



