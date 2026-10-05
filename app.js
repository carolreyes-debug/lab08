class Pelicula {

    constructor(titulo, precio, descuento, imagen) {
        this.titulo = titulo;
        this.precio = precio;
        this.descuento = descuento;
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        return this.precio - (this.precio * this.descuento / 100);
    }
}


// Crear las películas
let pelicula1 = new Pelicula(
    "Spider-Man",
    25,
    20,
    "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400"
);

let pelicula2 = new Pelicula(
    "Avengers",
    30,
    15,
    "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400"
);

let pelicula3 = new Pelicula(
    "Batman",
    28,
    10,
    "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400"
);


// Guardar objetos en el catálogo
let catalogo = [
    pelicula1,
    pelicula2,
    pelicula3
];


// Obtener el contenedor
let contenedor = document.getElementById("contenedor-peliculas");


// Recorrer el catálogo
catalogo.forEach(function(pelicula) {

    let tarjeta = document.createElement("div");

    tarjeta.className = "tarjeta";

    tarjeta.innerHTML = `
        <h2>${pelicula.titulo}</h2>

        <img src="${pelicula.imagen}" 
             alt="${pelicula.titulo}">

        <p>
            Precio: S/ ${pelicula.precio.toFixed(2)}
        </p>

        <p class="precio-final">
            Precio final: S/ ${pelicula.precio.toFixed(2)}
        </p>

        <button>
            Aplicar descuento
        </button>
    `;


    // Obtener el botón
    let boton = tarjeta.querySelector("button");


    // Evento click
    boton.addEventListener("click", function() {

        let nuevoPrecio = pelicula.calcularPrecioFinal();

        let precioFinal = tarjeta.querySelector(".precio-final");

        precioFinal.textContent =
            "Precio con descuento: S/ "
            + nuevoPrecio.toFixed(2);
    });


    // Mostrar la tarjeta en la página
    contenedor.appendChild(tarjeta);

});