// Add wave-like movement effect for images
document.querySelectorAll('.animated-image').forEach((img, index) => {
    img.style.animation = `float ${3 + index}s infinite ease-in-out alternate`;
  });
  