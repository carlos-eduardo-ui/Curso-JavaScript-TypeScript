const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

//continue - Continua para proxima iteraçao
//Breack - sai do laço

for (let numero of numeros) {
    
    if (numero === 2 ) {
        continue; //pula par proxima interaçao do laço
    }

    if (numero === 8) {
        console.log('8 aq, saindo....')
        break; //sai do laço ou seja acaba o array no momento que é executado.
    }
    console.log(numero);
}

/* 
se caso usar while

let i = 0;
while (i < numeros.legth) {
    let numero = numeros[i];

    if (numero === 2){
        console.log('Pulei o numero 2')
        i++
        continue;
    }
    i++;
}

*/