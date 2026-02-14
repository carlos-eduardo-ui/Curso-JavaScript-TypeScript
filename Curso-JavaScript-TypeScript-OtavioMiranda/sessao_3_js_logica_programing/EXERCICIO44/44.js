
// Capturar evento submit do  formulário
const form = document.querySelector('#formulario'); 

form.addEventListener('submit', function (e) { //funçao pra capturar um evento
  e.preventDefault(); 
  const inputPeso = e.target.querySelector('#peso'); //dados do input
  const inputAltura = e.target.querySelector('#altura'); //dados do input
  console.log(inputPeso, inputAltura)

  const peso = Number(inputPeso.value); //trasnforma a stirng em number
  const altura = Number(inputAltura.value); //trasnforma a stirng em number
  console.log(peso, altura)

  //if para caso os valores dos inputs sejam NaN
  if (!peso) {
    setResultado('peso e altura invalida', false)
    return; // return evita codigo dar erro ou sobrescrever pra true
  }
  
  if (!altura) {
    setResultado('altura invalida', false)
    return; //return evita codigo dar erro ou sobrescrever pra true
  }
  

  const imc = getIMC(peso, altura); //pega o valor da funcao getIMC onde ja houve
  //o calculo do IMC
  const nivelImc = getNivelImc(imc);

  const msg = `seu IMC é ${imc} (${nivelImc}).`; //cria a msg para informa IMC e o nivel
  setResultado(msg, true); //leva os parametros para a funçao resultado
  //
});

//funçao para calcular o nivel do IMC baseado no parametro(IMC) recebido
function getNivelImc(imc) {
  const nivel = ['abaixo do peso', 'peso normal',
    'sobrepeso', 'obsidade grau 1', 'obsidade grau 2',
    'obsidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0]

}

//funçao pra calculo do imc
function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return Number(imc.toFixed(2));
}

//cria um paragrafo
function criaP () {
  const p = document.createElement('p'); //cria um elemento <p>
  return p;
}

//recebe o resultado do form e confere se é true
function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = ''; //zera o resultado

  const p = criaP(); //cria um <p>
  
  if (isValid) { 
    p.classList.add('paragrafo-resultado'); //vai atribuir uma classe ao elemento <p> backgroud green
  } else {
    p.classList.add('bad') //vai atribuir uma classe ao elemento <p> backgorund red
  }

  
  p.innerHTML = msg; //seta o innerHTML
  resultado.appendChild(p); //adiciona <p> ao resultado
};
