var timeout;

// TODO: FUNCIÓN PARA EL MENÚ DESPLEGABLE DE "MI CUENTA"
var menuItems = document.querySelectorAll(".item.with-delay");

function handleMouseEnter(event) {
  clearTimeout(timeout);

  var menuItem = event.target;
  var submenu = menuItem.querySelector(".sub-menu");

  // Retraso en la aparición del menú desplegable
  setTimeout(function () {
    submenu.classList.add("active");
  }, 125);
}

function handleMouseLeave(event) {
  var menuItem = event.target;
  var submenu = menuItem.querySelector(".sub-menu");

  timeout = setTimeout(function () {
    submenu.classList.remove("active");
  }, 250); // 500 ms de retraso antes de ocultar el menú desplegable
}

// Agregar el evento mouseenter a los elementos del menú con retraso
menuItems.forEach(function (item) {
  item.addEventListener("mouseenter", handleMouseEnter);
  item.addEventListener("mouseleave", handleMouseLeave);
});

// TODO: FUNCIÓN PARA EL MENÚ DESPLEGABLE DE LAS SECCIONES "CATEGORÍAS"
var menuCats = document.querySelectorAll(".cat.with-delay");

function handleMouseEnter2(event) {
  clearTimeout(timeout);

  var menuItem = event.target;
  var subCategorie = menuItem.querySelector(".sub-categories");

  // Retraso en la aparición del menú desplegable
  setTimeout(function () {
    subCategorie.classList.add("active");
  }, 125);
}

function handleMouseLeave2(event) {
  var menuItem = event.target;
  var subCategorie = menuItem.querySelector(".sub-categories");

  // Retraso en la aparición del menú desplegable
  timeout = setTimeout(function () {
    subCategorie.classList.remove("active");
  }, 250);
}

menuCats.forEach(function (cat) {
  cat.addEventListener("mouseenter", handleMouseEnter2);
  cat.addEventListener("mouseleave", handleMouseLeave2);
});
