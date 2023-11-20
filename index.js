//Recibe argumentos, los procesa y delega las acciones a pelis.js.
const pelis = require("./pelis");

const takeArguments = (args) => {
	if (args === "sort") {
		return pelis.sort(process.argv[3]);
	} else if (args === "search") {
		return pelis.search(process.argv[3]);
	} else if (args === "tag") {
		return pelis.searchByTag(process.argv[3]);
	} else if (args === "help") {
		console.log("--sort");
		console.log("--search");
		console.log("--tag");
		return null;
	} else if (args === "") {
		return pelis.getAll();
	} else {
		console.error(`El argumento "${args}" no es válido.`);
		return null;
	}
};

function main() {
	const arg = process.argv[2] ? process.argv[2].replace(/^--/, "") : "";
	const element = takeArguments(arg);
	if (element === null) {
		return;
	} else {
		console.table(element);
	}
}

main();
