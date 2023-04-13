window.onload = () => {
  const heroItem = document.querySelectorAll(".hero-item");
  heroItem.forEach((item) => {
    item.addEventListener("mouseover", function () {
      heroItem.forEach((item2) => item2.classList.remove("active"));
      item.classList.add("active");
    });
  });
};
