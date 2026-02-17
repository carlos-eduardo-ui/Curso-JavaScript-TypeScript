//               0  1  2  3  4  5  6  7  8  [indice]
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero,terceiroNumero, , quintoNumero,...resto] = numeros

console.log(primeiroNumero, segundoNumero, terceiroNumero, quintoNumero);
console.log(resto);

//matriz
const num = [
    [1, 2, 3], // [0]
    [4, 5, 6], // [1]
    [7, 8, 9]  // [2]
];//[0][1][2] 

const [,[,,seis]] = num; //transfoma o num[1][2] = seis
const [,,[,oito]] = num; //transforma o num[2][1] = oito
console.log(seis, oito);
console.log(num[1][2]);

/*
FORMA MAIS PRATICA
const [lista1, lista2, lista3] = num;
console.log(lista2[2])  // = 6
*/