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
        return pelis.sort(process.argv[3]);
    } 
    else if (args === "search") {
        return pelis.search(process.argv[3]);
    }
    else if (args === "tag") {
        return pelis.searchByTag(process.argv[3]);
    }
    else if (args === "") {
        return pelis.getAll();
    }
    else {
        console.error(`El argumento "${args}" no es válido`);
        return null;
    }
}

function main() {
    const element = takeArguments(parsearTerminos(process.argv[2]));
    if (element === null) {
        return;
    }
    else {
    console.table(element);
    }
}

main()