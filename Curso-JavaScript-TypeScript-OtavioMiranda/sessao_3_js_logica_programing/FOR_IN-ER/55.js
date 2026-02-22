// FOR IN -> le os indices ou chaves do objeto
//                0       1       2
const frutas = ['pera', 'maça', 'uva'];

for (let i in frutas){
    console.log(frutas[i]);
}


const pessoa = {
    nome: 'carlos',
    sobrenome: 'eduardo',
    idade: 18
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let key in pessoa){
    console.log(key);
}