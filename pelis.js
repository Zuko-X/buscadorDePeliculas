const fs = require("fs");
const lista = fs.readFileSync(__dirname + "/pelis.json");
const listaPelis = JSON.parse(lista);

exports.getAll = () => {
	const peliculas = listaPelis.peliculas;
	return peliculas;
};

exports.sort = (texto) => {
	let lista = [];
	const peliculas = listaPelis.peliculas;
	if (texto === "title") {
		for (let i = 0; i < peliculas.length; i++) {
			lista.push(peliculas[i].title);
		}
		lista.sort();
	} else if (texto === "rating") {
		lista = peliculas.map((p) => ({ title: p.title, rating: p.rating })); // crea un array de objetos con título y rating
		lista.sort((a, b) => b.rating - a.rating); // ordena de mayor a menor según el rating
		listaFix = lista.map((p) => ({
			title: p.title,
			rating: p.rating.toFixed(0) + "%",
		}));
		return listaFix;
	} else if (texto === "year") {
		lista = peliculas.map((p) => ({ title: p.title, year: p.year }));
		lista.sort((a, b) => b.year - a.year);
		return lista;
	} else if (texto === "runtime") {
		lista = peliculas.map((p) => ({ title: p.title, runtime: p.runtime }));
		lista.sort((a, b) => b.runtime - a.runtime);
		return lista;
	} else {
		console.error(
			`Valor "${texto}" es invalido. Por favor ingresar title, rating, year, runtime.`
		);
		return null;
	}
	return lista;
};

//Tengo que darle el titulo de la peli y entregarme los resultados similares
exports.search = (texto) => {
	const peliculas = listaPelis.peliculas;
	if (texto === undefined) {
		console.error("Error. Se esperaba algun valor.");
		return null;
	} else {
		let lista = [];
		lista = peliculas.filter((p) =>
			p.title.toLowerCase().includes(texto.toLowerCase())
		);
		return lista;
	}
};

exports.searchByTag = (tag) => {
	let lista = [];
	const peliculas = listaPelis.peliculas;
	if (tag === undefined) {
		console.error("Error. Se esperaba un tag.");
		return null;
	} else {
		lista = peliculas.filter((p) => p.tags.includes(tag.toLowerCase()));
		return lista;
	}
};
