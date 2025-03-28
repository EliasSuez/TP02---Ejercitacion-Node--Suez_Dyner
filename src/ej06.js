const miUrl = new URL('asdasfasfsaf');
let miObjeto = null;

if(isValidUrl(miUrl))
{
    console.clear()
    parsearUrl(miUrl)
}
else{
    console.clear()
    console.log("URL invalida")
}

function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
        console.log(err)
      return false;
    }
  }

function parsearUrl(laURL){
    console.log("host: " + laURL)
    const parth = laURL.pathname
    console.log("parthname: " + parth)
    const param = laURL.searchParams
    console.log("parametros: " + param)
}
