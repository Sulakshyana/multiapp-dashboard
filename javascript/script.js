document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const apps = document.querySelectorAll(".section-app");
  const backButtons = document.querySelectorAll(".back-btn");

  // Open app when card is clicked

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const targetId = card.getAttribute("data-target");
      apps.forEach((app) => app.classList.remove("active"));
      document.getElementById(targetId).classList.add("active");
    });
  });

  // Back button → return to home
  backButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      apps.forEach((app) => app.classList.remove("active"));
      document.getElementById("home").classList.add("active");
    });
  });
});
