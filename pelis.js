
const fs = require("fs");
// Tiene que leer el archivo JSON y exponer funciones para interactuar con los datos.


const data = fs.readFileSync(__dirname +"/pelis.json");

const lista = JSON.parse(data)
exports.buscadorDePelis = () => {
    for (let i = 0; i < lista.peliculas.length; i++) {
        const tags = lista.peliculas[i].tags;

        // Mostramos los tags en la consola
        console.log(`Tags de la película ${i+1}: ${tags.join(", ")}`);
    }
}

exports.sort = () => {
  
}

exports.search = () => {
  
}

// exports.tag = (data) => {
//     if (data === lista.peliculas[1])
// }

console.log(buscadorDePelis())