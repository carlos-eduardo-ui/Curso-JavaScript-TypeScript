/*
escreva uma funçao que recebe um numero e retorne o seguinte
numero é divisivel por 3 = Fizz
numero é divisivel por 5 = Buzz
numero é divisivel por 3 e 5 = FizBuzz
numero não é divisivel por 3 e 5 = Retorna o proprio número
checar se o numero é realmente um numero = Retrona o prorpio numero
use a funcao com numeros de 0 a 100
*/

function validaNumero (n){
        if (typeof n !== 'number') return n, 'NaN';
        if(n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
        if (n % 3 === 0) return "Fizz";
        if (n % 5 === 0) return "Buzz";
        return n;
        
}

console.log('a', validaNumero('a'))
for (let i = 0; i<=100; i++){
    console.log(i, validaNumero(i));
}

