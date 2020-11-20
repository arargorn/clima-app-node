const colors = require('colors');

const imprimirEnPantalla = (resp) => {
    var i = 0;
    var dia;
    var presion;
    var temp;
    var temp_max;
    var temp_min;
    var temp_sensacio;
    var dia_actual = resp[0].dt_txt.slice(0, 10);
    var hora_actual = resp[0].dt_txt.slice(11, 19);
    var nou_dia = true;
    var blank = ' '.repeat(100);
    var linia = '';
    var linia_doble = '|' + '='.repeat(200);
    //console.log(linia_doble);
    //console.log('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
    var linia_sencilla = '|' + '-'.repeat(200);
    linia = linia_doble.slice(0, 103) + '|';
    console.log(linia.green);
    //console.log('============================================================================================'.green);
    for (i; i < resp.length; i++) {

        //console.log(resp[i]);

        dia = resp[i].dt_txt.slice(0, 10);
        hora = resp[i].dt_txt.slice(11, 19);

        presion = resp[i].main.pressure;
        temp = resp[i].main.temp;
        temp_min = resp[i].main.temp_min;
        temp_max = resp[i].main.temp_max;
        temp_sensacio = resp[i].main.feels_like;

        if (nou_dia) {
            linia = '|' + blank.slice(0, 50) + 'Dia: ' + dia;
            //console.log(linia.length);
            console.log(linia.green + blank.slice(0, 37) + '|'.green);
            //console.log('|------------------------------------------------------------------------------------------------------|'.green);
            nou_dia = false;
        }


        if (dia === dia_actual) {
            //console.log('|------------------------------------------------------------------------------------------------------|'.green);

            linia = blank.slice(0, 50) + 'Hora: ' + hora + blank.slice(0, 38);
            linia = '|'.green + linia.red + '|'.green;
            console.log(linia);
            //console.log('|------------------------------------------------------------------------------------------------------|'.green);
            linia = 'Presion. ' + presion + blank.slice(0, 89);
            console.log('|'.green + linia + '|'.green);

            linia = 'Temperatura màxima:       ' + estrellas(temp_max) + ' ' + temp_max;
            console.log('|'.green + linia.blue + blank.slice(0, (102 - linia.length)) + '|'.green);
            linia = 'Temperatura:              ' + estrellas(temp) + ' ' + temp;
            console.log('|'.green + linia.green + blank.slice(0, (102 - linia.length)) + '|'.green);
            linia = 'Temperatura de sensació:  ' + estrellas(temp_sensacio) + ' ' + temp_sensacio;
            console.log('|'.green + linia.red + blank.slice(0, (102 - linia.length)) + '|'.green);
            linia = 'Temperatura mínima:       ' + estrellas(temp_min) + ' ' + temp_min;
            console.log('|'.green + linia.cyan + blank.slice(0, (102 - linia.length)) + '|'.green);
            //console.log('|Temperatura:              '.green + colors.brightGreen(estrellas(temp)) + ' ' + colors.black(temp));
            //console.log('|Temperatura de sensació:  '.red + colors.brightRed(estrellas(temp_sensacio)) + ' ' + colors.black(temp_sensacio));
            //console.log('|Temperatura mínima:       '.yellow + colors.brightYellow(estrellas(temp_min)) + ' ' + colors.black(temp_min));
            linia = resp[i].weather[0].description;
            console.log('|'.green + colors.inverse(linia.inverse) + blank.slice(0, (102 - linia.length)) + '|'.green);
            //console.log('|-------------------------------------------------------------------------------------------------------|');
        } else {
            dia_actual = dia;
            nou_dia = true;
            console.log('|======================================================================================================|'.green);
        }
    }
    linia = linia_doble.slice(0, 103) + '|';
    console.log(linia.green);
    //console.log(estrellas(17) + 17);
};

let estrellas = (x) => {
    let c = '|====^====:====^====';
    let cadena = c.repeat(5);

    //'|=========|==========|==========|==========|=========|==========|==========|==========|=========|==========|==========|==========|=========|==========|==========|==========|';
    let y = Math.round(2 * x + 1);
    //console.log(2 * x + ' ' + y);
    return cadena.slice(0, y);
};

module.exports = {
    imprimirEnPantalla
}