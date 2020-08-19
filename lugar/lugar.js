const axios = require('axios');

const getLugarLatLng = async( dir ) => {
     const encodeUrl = encodeURI(dir);

     const instance = axios.create({
          baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=c919cd7d1f0253f9f811725998e6c0c8`
     });
     
     const resp = await instance.get(); 

     const data = resp.data;

     //console.log(data);

     if (data.cod === 400){
          throw new Error(`No hay resultados para ${dir}`);
     }

     const direccion = data.name;
     const lat       = data.coord.lat;
     const lon       = data.coord.lon;
     /*
          .then(resp => {
               console.log(resp.data);
          })
          .catch( err => {
               console.log('ERROR!!!', err);
          });
 */
     return {
          direccion,
          lat,
          lon
     }
}

module.exports = {
     getLugarLatLng
}


