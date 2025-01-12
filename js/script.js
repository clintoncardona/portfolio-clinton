const $portfolio = document.querySelector(".sec-portfolio-js"); // main
const $modalImgPortfolio = document.querySelector(".img-modal-js");

$portfolio.addEventListener("click", (e) => {
  if (e.target.classList.contains("img-btn-modal-js")) {
    // SRC
    let urlImg = e.target.attributes[0].nodeValue;
    //Add modal
    $modalImgPortfolio.src = urlImg;
  }
});

// efecto wavy
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remover la clase 'active' de todos los enlaces
      navLinks.forEach((nav) => nav.classList.remove("active"));
      // Agregar la clase 'active' al enlace que fue clicado
      this.classList.add("active");
    });
  });
});
