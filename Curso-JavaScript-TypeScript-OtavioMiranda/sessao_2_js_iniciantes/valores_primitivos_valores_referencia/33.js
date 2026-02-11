/*
Primitivos : string, number, boolean, undefined, 
null (bigint, symbol)

Referencia (mutavel): Array, object, function
*/

const a = {
    nome: 'luiz',
    sobrenome: 'otavio'
};
const b = {...a}; // spread torna independente

a.nome = 'joão';
console.log(a);
console.log(b);



/*let a = [1, 2, 3];
let b = a;

a.push(4);
console.log(a);

b.pop();
console.log(a, b); */


//            0123
//let nome = 'luiz';
//nome[0] = 'R';
//console.log(nome[0], nome)

//let a = 'A';
//let b = a; //copia
//console.log(a, b);