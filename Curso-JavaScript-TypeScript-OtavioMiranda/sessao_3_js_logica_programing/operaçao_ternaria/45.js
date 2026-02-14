// (condicao) ? 'valor para verdadeiro' : 'valor para falso'; 
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'red';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario +'   ',  corPadrao);

/*if (pontuacaoUsuario >= 1000) {
    console.log('usuario vip');
} else {
    console.log('usuario normal');
} */

