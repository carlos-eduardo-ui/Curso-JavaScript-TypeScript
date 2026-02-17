const pessoa = {
    nome: 'Luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome: n, sobrenome, idade ,nasc = 'NOT'} = pessoa;
console.log(n, sobrenome, idade, nasc);

const {endereco: {rua: r = 12345, numero}, endereco} = pessoa;
console.log(r, numero, endereco);

/*
USANDO O METODO RESTO
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto)
*/