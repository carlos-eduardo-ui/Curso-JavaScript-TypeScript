//declaracao de funcao (funciton hoisting);
falaOI();
function falaOI() {
    console.log('oi');
}

//---------------------------------------------------------


// First-class objects(objetos de primeira classe)
// Function expression 

const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

//---------------------------------------------------------
function executaFuncao(funcao) {
    console.log('vou executar sua funcao abaixo:');
    funcao();
}
executaFuncao(souUmDado);

//---------------------------------------------------------

// Arrow function 
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};
funcaoArrow();

//---------------------------------------------------------

// Dentro de um objeto
const obj = {
    falar() {
        console.log('estou falando...');
    }
};
obj.falar();
