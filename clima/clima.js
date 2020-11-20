const axios = require('axios');


const getClima = async(lon, lat) => {
    //const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f38600292d0b40a6e3c1b0ceed8a0288&units=metric`;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=16&appid=f38600292d0b40a6e3c1b0ceed8a0288&units=metric&lang=ca`;
    const resp = await axios.get(url);

    //return resp.data.main.temp;
    return resp.data.list;
};


module.exports = {
    getClima
}