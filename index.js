//Recibe argumentos, los procesa y delega las acciones a pelis.js.
const pelis = require("./pelis")

function parsearTerminos(texto) {
}
const takeArguments = () => {
    let args = process.argv.slice(2)
    const largo = args.length;
    for (let i = 0; i < largo; i += 2) {
        if (i + 1 >= largo) {
            break;
        }
        const name = args[i].replace(/^--/, "");
        const value = args[i + 1];
        switch (name) {
            case "sort":
                pelis.sort(value);
                break;
            case "search":
                pelis.search(value);
                break;
            case "tag":
                pelis.tag(value);
                break;
            default:
                console.error(`El argumento "${name}" no es válido`);
                process.exit(1);
        }
    }
}

function main() {
    terminosParseados= parsearTerminos(process.argv[2])
}