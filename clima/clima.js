const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f3045495424fc93738f7fce58a53190b&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}