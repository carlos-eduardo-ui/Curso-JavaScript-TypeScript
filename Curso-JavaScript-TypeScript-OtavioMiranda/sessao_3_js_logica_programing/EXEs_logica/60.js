//Escreva uma funcao que recebe 2 números e retorne o maior deles
const num1 = -10;
const num2 = 20;

//meu jeito *verboso dms*
function maior (num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

//function com eron function
function max1(x, y){ 
    return x > y ? x : y; 
};

//eron function
const max2 = (x, y) =>  x > y ? x : y;




const max = maior(num1, num2);
console.log(max);