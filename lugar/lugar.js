const axios = require('axios');

const getLugarLatLon = async dir => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '2e8df011bfmsh87777ebdb2135e7p184205jsna046f7a60ace' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];

    const { name: direccion, lat, lon } = data;

    return {
        direccion,
        lat,
        lon
    }

};

module.exports = {
    getLugarLatLon
}