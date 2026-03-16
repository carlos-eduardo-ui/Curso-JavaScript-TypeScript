//return
//Retoma um valor
// Termina a funçao

function soma(a, b) {
    return a + b;
}
//retorna o resultado 

function soma2(a, b) {
    console.log(a + b);
}
//retorna o console

//-------------------------------------------

document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
//funcao que nao retorna nada e nao precisou do valor

// ------------------------------------------

function criaPessoa(nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome};
}

const p1 = criaPessoa("carlos", 'eduardo');
const p2 = {
    nome: 'joao',
    sobrenome: 'oliveira'
};

//---------------------------------------------

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }   
    return falaResto;
} 

const fala = falaFrase('ola');
const resto = fala('mundo!');
console.log(resto);

//exemplo pratico

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplicaplica(2));
console.log(quadriplicaplica(2));
