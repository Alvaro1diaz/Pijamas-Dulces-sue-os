const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
const orderForm = document.getElementById("orderForm");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    productCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === "todos" || category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const tipo = document.getElementById("tipo").value;
  const talla = document.getElementById("talla").value.trim();
  const ubicacion = document.getElementById("ubicacion").value.trim();
  const comentarios = document.getElementById("comentarios").value.trim();

  const mensaje = `Hola Dulces Sueños Pijamas, quiero hacer un pedido.%0A%0A` +
    `Nombre: ${encodeURIComponent(nombre)}%0A` +
    `Tipo de pijama: ${encodeURIComponent(tipo)}%0A` +
    `Talla: ${encodeURIComponent(talla)}%0A` +
    `Ciudad o barrio: ${encodeURIComponent(ubicacion || "Por confirmar")}%0A` +
    `Comentarios: ${encodeURIComponent(comentarios || "Sin comentarios")}`;

  window.open(`https://wa.me/573138182726?text=${mensaje}`, "_blank", "noopener");
});
