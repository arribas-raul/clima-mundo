const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

const argv = require('yargs').options({
     direccion: {
          alias: 'd',
          descripcion: 'Dirección de la ciudad para obtener el clima',
          demand: true
     }
}).argv;

/* lugar.getLugarLatLng(argv.direccion)
     .then(resp => console.log(resp));

clima.getClima(40.75,-74.0)
     .then(resp=>console.log)
     .catch(err=>console.log); */

clima.getInfo(argv.direccion)
     .then(console.log)
     .catch(console.log);    


//console.log(argv.direccion);