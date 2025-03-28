import fs from 'fs';

const ARCHIVO_ENTRADA = "./src/modules/archivo-entrada.txt";
const ARCHIVO_SALIDA = "./src/modules/archivo-salida.txt";

console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {
    fs.readFile(origen, "utf8", (err, data) => {
        if (!data) return; 
        fs.writeFile(destino, data, "utf8", () => {
            console.log("Archivo copiado con éxito.");
        });
    });
}
