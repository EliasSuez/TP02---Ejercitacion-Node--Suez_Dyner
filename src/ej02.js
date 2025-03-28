import {PI, sumar, multiplicar, dividir, restar, numeros} from './modules/matematica.js';
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
total = multiplicar(numero1, numero2)
console.log(`multiplicar(${numero1}, ${numero2}) = ${total}`);
total = dividir(numero2, numero1 )
console.log(`dividir(${numero2}, ${numero1}) = ${total}`);
total = restar(numero2, numero1 )
console.log(`restar(${numero1}, ${numero2}) = ${total}`);

numeros.forEach(element => {
    console.log(element)
});