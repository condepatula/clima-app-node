const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

/*lugar.getLugarLatLon(argv.direccion)
    .then(console.log);*/

/*clima.getClima(-25.350000, -57.509998)
    .then(console.log)
    .catch(console.log);*/

const getInfo = async direccion => {
    const { lat, lon } = await lugar.getLugarLatLon(argv.direccion);
    const temperatura = await clima.getClima(lat, lon);

    if (!temperatura) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`);
        return;
    }

    return `La temperatura de ${direccion} es de ${temperatura}`;
};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);