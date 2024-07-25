function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}


$(document).ready(function () {
  $(".testimonials-container").owlCarousel({
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      764: {
        items: 2,
      },
      1152: {
        items: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".testimonial-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => {
        c.classList.remove("active");
        c.querySelector(".quote img").src = "image/Quote copy.svg"; // Ubah ke quote copy ketika tidak aktif
      });
      card.classList.add("active");
      card.querySelector(".quote img").src = "image/Quote.svg"; // Ubah ke quote ketika aktif
    });
  });
});
