/*                              /   ()
* Aritméricos                   /   **
* + adiçao / concatenaçao       /   / %
* ** potenciaçao                /   + -
* % resto da divisao           /
*/

/*
*   incremento = ++
* decremento = -- 
*/

const num1 = 2;
const num2 = 10;
console.log(num1 + num2);

let contador = 1;
contador++; //2
console.log(contador);

const passo = 2;
let cont =0;

cont *= passo;
cont += passo; // contador = contador + passo(2)
cont += passo;
cont *= passo;
cont /= passo;
console.log(cont);

// NaN - Not a Number / paseInt( inteiro ), parseFloat( decimais )
const num = 10;
const num0 = ('5');
console.log(num + num0);
console.log(parseInt(num0));
