// Obtén el ID del producto de la URL (podemos usar la url porque no estamos haciendo http en internet sino en el equipo)
const urlParams = new URL(window.location.href);
const productId = urlParams.searchParams.get('id');

// Función para obtener los detalles del product
// Intenta recuperar el producto desde localStorage
const productJSON = localStorage.getItem(`product_${productId}`);

// Creamos el evento de escucha del click del botón agregar al carrito
document.addEventListener("DOMContentLoaded", () => {
  const product = JSON.parse(productJSON);
  // Agrega un evento al botón "Agregar al Carrito"
  const agregarAlCarritoButton = document.getElementById("agregaralcarrito");
  agregarAlCarritoButton.addEventListener("click", () => {
    // Agrega el producto al carrito en localStorage
    agregarAlCarrito(product);
  });
});

// creamos la función de agregar al carrito de compra
function agregarAlCarrito(product) {
  // Obtén el carrito actual desde localStorage o crea un array vacío
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Agrega el producto al carrito
  carrito.push(product);

  // Guarda el carrito actualizado en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Puedes mostrar una confirmación de que el producto se ha agregado al carrito
  alert("Producto agregado al carrito");
}

// mostramos el detalle del producto:
if (productJSON) {
  // Si el producto está en localStorage, convierte el JSON a un objeto JavaScript
  const product = JSON.parse(productJSON);

  // Muestra los detalles del producto en la página
  const detallesContainer = document.querySelector('.detalleproducto');
  detallesContainer.innerHTML = `
  <div class="detalleproducto">
    <div>
    <img src="${product.image}" alt="${product.title}" >
    </div>
    <div class="descripcion-detalleproducto">
      <h2>${product.title}</h2>
      <br>
      <p>${product.description}</p>
      <br><br><br>
      <div class="divider-price"></div>
      <h1>${product.price}</h1>
      <div class="divider-price"></div>
    </div>
  </div>
  `;
} else {
  // Si el producto no está en localStorage, muestra un mensaje de que no se ha encontrado.
  console.log('Producto no encontrado en el almacenamiento local.');
}