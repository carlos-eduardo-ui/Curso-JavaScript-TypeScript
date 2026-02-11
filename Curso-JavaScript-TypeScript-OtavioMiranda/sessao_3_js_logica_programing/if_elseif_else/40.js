/**
Entre 0 - 11  - Bom dia 
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// IF pode ser usado sozinho 
// Sempre que uso else preciso de um IF antes
// Posso ter varios else ifs na checagem
// Só posso ter 1 ELSE na checagem 
// Podemos usar condiçoes sem else if, utilizando apenas if e else


const hora = 12;

if (hora >= 0 && hora <= 11 ) {
    console.log('bom dia');
} else if (hora >=12 && hora <= 17){
    console.log('boa tarde');
} else if (hora >= 18 && hora <=23 ) {
    console.log('Boa noite');
} else{
    console.log('informe a hora entre 0 a 24');
}


const tenhoGrana = true
if (tenhoGrana) {
    console.log('vou sair de casa');
} else {
    console.log('não vou sair de casa');
}