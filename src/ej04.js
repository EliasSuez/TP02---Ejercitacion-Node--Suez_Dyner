import fs from 'fs';

const ARCHIVO_ENTRADA = "./modules/archivo-entrada.txt";
const ARCHIVO_SALIDA = "./modules/archivo-salida.txt";

console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {
    fs.readFile(origen, "utf8", (_, data) => {
        fs.writeFile(destino, data, "utf8", () => {
            console.log("Archivo copiado con éxito.");
        });
    });
}



