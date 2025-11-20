// YEAR
document.getElementById("year").innerText = new Date().getFullYear();

// ANIMATE ON SCROLL
const revealElements = document.querySelectorAll(".slide-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));
