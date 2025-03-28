const miUrl = new URL('http://www.transfermarkt.es/schnellsuche/keinergebnis/schnellsuche?query=asdasd');
let miObjeto = null;
console.clear()
miObjeto = parsearUrl(miUrl);
function parsearUrl(laURL){
 // No seas vago, acá hay que hacer el cuerpo de la función!!!
    console.log("host: " + laURL)
    const parth = laURL.pathname
    console.log("parthname: " + parth)
    const param = laURL.searchParams
    console.log("parametros: " + param)
}
