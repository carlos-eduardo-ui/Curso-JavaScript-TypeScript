//                            parametro
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
//                              Argumento = valor
const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Eduardo', 'Otavio', 65);
const pessoa3 = criaPessoa('Joao', 'Otavio', 54);
const pessoa4 = criaPessoa('Virginia,', 'Otavio', 24);
const pessoa5 = criaPessoa('Pedro', 'Otavio', 12);
console.log(pessoa1)

const pessoa0 = {
    nome: 'luiz',
    sobrenome: "miranda",
    idade: 23,

    fala() {
        console.log(`Minha idade atual é ${this.idade}.`)
    },

    incremetandoIdade() {
        this.idade++;
    }
};

pessoa0.fala();
pessoa0.incremetandoIdade();
pessoa0.fala();
pessoa0.incremetandoIdade();
pessoa0.fala();
pessoa0.incremetandoIdade();
console.fala();