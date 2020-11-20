const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad de la que queremos saber el tiempo',
            demand: true
        },
        country: {
            alias: 'c',
            desc: 'Pais de la ciudad a buscar',
            demand: true

        }
    })
    .help()
    .argv;

module.exports = {
    argv
};