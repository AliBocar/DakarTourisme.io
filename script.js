document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Merci pour votre message ! Nous vous répondrons bientôt.");
      form.reset();
    });
    images: [];
  }

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 1s";
      card.style.opacity = 1;
    }, 300 * i);
  });
});
