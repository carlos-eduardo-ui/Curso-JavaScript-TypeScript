function getDayWeekText(diaSemana) {
    let diaSemanaTexto;
     
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'domingo'; 
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'sabado';
        return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }
    return diaSemanaTexto
}


const data = new Date('2020-04-20 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto = getDayWeekText(diaSemana);


/*
if (diaSemana === 0 ) {
    diaSemanaTexto = 'domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'segunda';
}  else if (diaSemana === 2) {
    diaSemanaTexto = 'terça';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'quinta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'segunda';
} else {
    diaSemanaTexto = '';
}
*/
console.log(diaSemana, diaSemanaTexto);