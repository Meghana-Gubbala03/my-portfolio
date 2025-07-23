// Example text animation starter
window.addEventListener("load", function() {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hidden');
});

document.addEventListener("DOMContentLoaded", () => {
  const glowText = document.querySelector(".glow");
  glowText.classList.add("animate-glow");
});

particlesJS.load('particles-js', 'particles-config.json', function() {
  console.log('🌟 Particles loaded successfully!');
});


// Get the button:
let rocketButton = document.getElementById("rocketScroll");

// Show button when scrolled down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    rocketButton.style.display = "block";
  } else {
    rocketButton.style.display = "none";
  }
};

// Scroll to top when button clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
