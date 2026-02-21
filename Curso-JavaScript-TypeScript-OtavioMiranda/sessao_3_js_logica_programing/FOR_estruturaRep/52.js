
// i - index
for (let i = 0; i <= 10; i++) {
    console.log(`Linha ${i}`);
}

console.log('');

//mostra apenas numeros o pares
for (let i = 0; i <=10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par)
}

console.log('');

//                0       1       2
const frutas = ['maça', 'pera', 'uva', 'carlos', 'eduardo', 'dias', 'bezerra'];
console.log(frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}, ${frutas[i]}`);
}
