// Funcoes criadas com a palavra function tem uma coisa chamada arguments onde
// sustenta todos os argumentos enviados
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total); 
}
funcao( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //envia argumento para suprir valor, mas JS nao liga 

//-------------------------------------------------------

function funcaoUndefined(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcaoUndefined(1,2,3) //1 2 3 undefined undefined undefined

//-------------------------------------------------------

function soma(a, b=4, c=2380 ){
    console.log(a + b + c);
}
soma(10, undefined, 10);  // undefined assume valor vazio nos parametros 

//-------------------------------------------------------


const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 1,  20, 30, 40, 50);

//-------------------------------------------------------

// "GANBIARRA"
const rest = (...args) => {
    console.log(args);
};
rest(1, 2, 3, 4, 5, 5, 5, 65, 6, 5, 6, 56)