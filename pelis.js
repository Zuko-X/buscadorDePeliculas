const fs = require("fs");
const { get } = require("http");
const lista = fs.readFileSync(__dirname + "/pelis.json")
const listaPelis = JSON.parse(lista);
// Tiene que leer el archivo JSON y exponer funciones para interactuar con los datos.
// fetch("./pelis.json")
// .then(res => res.json())
// .then(lista => console.log(lista))
// const lista = JSON.parse(lista)

exports.getAll = () => {
    let lista = [];
    const peliculas = listaPelis.peliculas
    for (let i = 0; i < peliculas.length; i++) {
        lista.push(listaPelis.peliculas[i])
    }
    return lista;
}

exports.sort = () => {
  
}

//Tengo que darle el titulo de la peli y entregarme los resultados similares
exports.search = () => {
  
}


// Buscar una solucion
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

