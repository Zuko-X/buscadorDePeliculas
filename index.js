//Recibe argumentos, los procesa y delega las acciones a pelis.js.
const { parse } = require("path");
const pelis = require("./pelis")

function parsearTerminos(texto) {
    if (texto == String) {
        console.log("es string")
    } else {
        console.log("no es")        
    }


    const minusculas = texto.toLowerCase();
    return minusculas;
}
const nono = (texto) => {
    let args = texto
    const largo = args.length;
    for (let i = 0; i < largo; i += 2) {
        if (i + 1 >= largo) {
            break;
        }
        const name = args[i].replace(/^--/, "");
        const value = args[i + 1];
        switch (name) {
            case "sort":
                // pelis.sort(value);
                console.log("si")
                break;
            case "search":
                pelis.search(value);
                break;
            case "tag":
                pelis.tag(value);
                break;
            default:
                pelis.getAll();
        }
    }
}

const takeArguments = (texto) => {
    args = texto.replace(/^--/, "");
    if (args === "sort") {
        console.log("Es sort");
    } 
    else if (args === "search") {
        console.log("Es search");
    }
    else if (args === "tag") {
        console.log("Es tag");
    }
    else if (args === "") {
        console.table(pelis.getAll())
    }
    else {
        console.error(`El argumento "${args}" no es válido`);
        process.exit(1);
    }
}

function main() {
    // terminosParseados = parsearTerminos(process.argv[2])
    // console.table(takeArguments(terminosParseados))
    takeArguments(parsearTerminos(process.argv[2]))
}
main()