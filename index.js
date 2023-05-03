//Recibe argumentos, los procesa y delega las acciones a pelis.js.
const { parse } = require("path");
const pelis = require("./pelis")

function parsearTerminos(texto) {
    if (typeof texto === "string" && texto.trim() !== "") {
        const textoParseado = texto.toLowerCase();
        return textoParseado;
    } else {
        return texto;
    }
}

const takeArguments = (texto) => {
    texto = texto === undefined ? texto = "" : texto;
    const args = texto.replace(/^--/, "");
    if (args === "sort") {
        console.log("Es sort");
        return pelis.sort();
    } 
    else if (args === "search") {
        console.log("Es search");
        return pelis.search();
    }
    else if (args === "tag") {
        console.log("Es tag");
        return pelis.searchByTag();
    }
    else if (args === "") {
        return pelis.getAll();
    }
    else {
        console.error(`El argumento "${args}" no es válido`);
        process.exit(1);
    }
}

function main() {
    console.table(takeArguments(parsearTerminos(process.argv[2])))
}

main()