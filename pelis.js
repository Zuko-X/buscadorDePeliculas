const fs = require("fs");
const { get } = require("http");
const lista = fs.readFileSync(__dirname + "/pelis.json")

// Tiene que leer el archivo JSON y exponer funciones para interactuar con los datos.
// fetch("./pelis.json")
// .then(res => res.json())
// .then(lista => console.log(lista))
// const lista = JSON.parse(lista)

exports.getAll = () => {
    const todasLasPelis = lista.peliculas
    return todasLasPelis;
}



exports.buscadorDePelis = () => {
    
}

exports.sort = () => {
  
}

exports.search = () => {
  
}

exports.searchByTag = (tag) => {
    for (let i = 0; i < lista.peliculas.length; i++) {
        const tags = lista.peliculas[i].tags;
            switch (tag) {
                case "animación":
                  peliculasAnimacion.push(lista.peliculas[i]);
                  break;
                case "aventura":
                    
                    break;
                case "familia":

                    break;
                default:
                    break;
            };
        // Mostramos los tags en la consola
        console.log(`Tags de la película ${i+1}: ${tags.join(", ")}`);
    }
    return peliculasAnimacion
}

console.log(this.getAll())