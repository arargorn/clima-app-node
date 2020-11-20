const axios = require('axios');

const cities = require('../cities/city.list.min.json');



//console.log(argv.direccion, argv.country);



const getLugarLatLng = (city, country) => {

    let ciudad = {};

    ciudad = cities.find(e => e.name === city & e.country === country);

    name = ciudad.name;
    lat = ciudad.coord.lat;
    lon = ciudad.coord.lon;
    return {
        name,
        lat,
        lon
    };
};

module.exports = {
    getLugarLatLng
}