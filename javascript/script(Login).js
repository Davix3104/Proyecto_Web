const checkbox = document.getElementById("btn__regis");
const contenedor = document.getElementById("contenedor");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    mostrarContenedor();
  } else {
    ocultarContenedor();
  }
});

function mostrarContenedor() {
    console.log('Mostrando contenedor');
  contenedor.style.display = "block";
  setTimeout(function () {
    contenedor.style.opacity = "1";
  }, 50);
}

function ocultarContenedor() {
    console.log('Mostrando contenedor');
  contenedor.style.opacity = "0";
  setTimeout(function () {
    contenedor.style.display = "none";
  }, 300);
}
