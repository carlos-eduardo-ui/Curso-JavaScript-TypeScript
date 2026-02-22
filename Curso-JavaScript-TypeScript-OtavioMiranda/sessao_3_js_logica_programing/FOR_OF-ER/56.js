//  
const nome = ['carlos', 'eduardo', 'dias', 'bezerra'];


//for classico - Geralmente com iteráveis (array ou strings)
for (let i = 0; i < nome.length; i++ ){
    console.log(nome)
}


console.log('-----------------------------------------------');


// For in - Retorna o indice ou chave (string, array, objetos)
for (let i in nome) {
    console.log(nome[i]); 
} 


console.log('-----------------------------------------------');


//For of - Retorna o valor em si (iteráveis, arrays ou strings)
for (let valor of nome) {
    console.log(valor) //somente valor
}


console.log('-----------------------------------------------');


nome.forEach(function(e, indice, array){ //e = elemento -> valor
    console.log(e, indice, array);
});

console.log('-----------------------------------------------');

const pessoa = {
    nome: 'eduardo',
    sobrenome: 'carlos'
};

for (let key in pessoa) {
    console.log(key ,pessoa[key]);
}