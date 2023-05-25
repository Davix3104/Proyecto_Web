var anchoVentana = window.innerWidth;
var lista = document.getElementById("lista-categorias");


var categoria = document.getElementById("carnes");
var valorInicial = categoria.innerHTML;

function cambiarNombre(){
    if (anchoVentana < 1024) {
        categoria.innerHTML = "CARNES";
    } else if(anchoVentana > 1024){
        categoria.innerHTML = "valorInicial";
    }
}

cambiarNombre(),

window.addEventListener("resize", cambiarNombre);

var lista = document.getElementsByTagName("li");

// Obtener la cantidad de elementos de la lista
var tamanoArray = lista.length;

// Crear un nuevo array con el tamaño correspondiente
var miArray = new Array(tamanoArray);

// El nuevo array ahora tiene el tamaño de la lista
console.log(miArray.length); 