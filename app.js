const argv = require('./config/yargs.js').argv;
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
const pantalla = require('./pantalla/pantalla.js');

/* let coord = {
    direccion,
    lat,
    long
}; */
//console.log(argv.direccion, argv.country);

let ciudad = lugar.getLugarLatLng(argv.direccion, argv.country);
if (ciudad != undefined) {
    console.log(ciudad);
    console.log(ciudad.name);
    console.log(ciudad.lon);
    console.log(ciudad.lat);
    let temperatura;
    clima.getClima(ciudad.lon, ciudad.lat)
        .then(resp => {
            pantalla.imprimirEnPantalla(resp);
        })
        .catch(console.log);
} else console.log('Ciudad no encontrada');






/* const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/forecast?id=3128760&appid=f38600292d0b40a6e3c1b0ceed8a0288',
    headers: { 'X-Cache-Key': 'f38600292d0b40a6e3c1b0ceed8a0288' }
});

instance.get()
    .then(resp => {
        console.log(resp.data.city);
    })
    .catch(err => {
        console.log('ERROR!!!!!', err);
    }); */