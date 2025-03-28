import { getCurrency, getCountry, getCountryByAbbreviation } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'AR'; 
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'US'; 
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(pais) {
    return getCountry(getCountryByAbbreviation(pais))?.cur||null
}
