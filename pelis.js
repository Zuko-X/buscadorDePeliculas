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
    const lista = [];
    const peliculas = listaPelis.peliculas
    for (let i = 0; i < peliculas.length; i++) {
        lista.push(listaPelis.peliculas[i])
    }
    return lista;
}

exports.sort = (texto) => {
    let lista = [];
    const peliculas = listaPelis.peliculas;
    if (texto === "title") {
        for (let i = 0; i < peliculas.length; i++) {
            lista.push(peliculas[i].title);
        }
        lista.sort();
    }
    else if (texto === "rating") { //no me muestra correctamente ordenado por rating
        lista = peliculas.map((p) => ({ title: p.title, rating: p.rating })); // crea un array de objetos con título y rating
        lista.sort((a, b) => b.rating - a.rating); // ordena de mayor a menor según el rating
        listaFix = lista.map((p) => ({title: p.title, rating: p.rating.toFixed(0) + "%"}))
        return listaFix;
    } 
    else if (texto === "year") {
        lista = peliculas.map((p) => ({ title: p.title, year: p.year }));
        lista.sort((a, b) => b.year - a.year);
    }
    else if (texto === "runtime") { //No me muestra correctamente ordenado por runtime
        const listaOrdenada = peliculas.map((p) => {
            const duracion = p.runtime;
            const partes = duracion.split(" "); // divide el string en dos partes: "1h" y "32m"
            const horas = parseInt(partes[0]); // extrae el número de horas y conviértelo en un entero
            const minutos = parseInt(partes[1]); // extrae el número de minutos y conviértelo en un entero
            const minutosTotales = horas * 60 + minutos; // calcula el total de minutos
            return { title: p.title, minutosTotales: minutosTotales };
        }); // crea una lista de objetos que incluye el título de la película y la duración total en minutos
        listaOrdenada.sort((a, b) => a.minutosTotales - b.minutosTotales); // ordena la lista según la duración total en minutos
        const listaFix = listaOrdenada.map((p) => ({ title: p.title, runtime: `${Math.floor(p.minutosTotales / 60)}h ${p.minutosTotales % 60}m` })); // crea una lista de objetos que incluye el título de la película y la duración en formato "Xh Ym"
        return listaFix;
    }
    else {
        console.error(`Valor "${texto}" es invalido. Por favor ingresar title, rating, year, runtime.`)
        return null;
    }
    return lista;
}

//Tengo que darle el titulo de la peli y entregarme los resultados similares
exports.search = (texto) => {
    const peliculas = listaPelis.peliculas;
    if (texto === undefined) {
        console.error("Error. Se esperaba algun valor.");
        return null;
    } else {
        let lista = []
        lista = peliculas.filter((p) => p.title.toLowerCase().includes(texto.toLowerCase()));
        return lista;
    }
}


// Arreglar y completar
// Hay una forma de hacerlo sin switch, solo con .includes que lo hace mas corto el código
exports.searchByTag = (tag) => {
    let lista = [];
    const peliculas = listaPelis.peliculas;
    if (tag === undefined) {
        console.error("Error. Se esperaba un error.")
        return null;
    } else {
        lista = peliculas.filter((p) => p.tags.includes(tag.toLowerCase()));
        return lista;
    };  
}

