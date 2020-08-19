const axios = require('axios');
const lugar = require('../lugar/lugar');

const getClima = async(lat, lon) => {

     const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c919cd7d1f0253f9f811725998e6c0c8&units=metric`);

     return resp.data.main.temp;
}

const getInfo = async (direccion) => {
     try{
          const coords = await lugar.getLugarLatLng(direccion);          
          const clima  = await getClima(coords.lat, coords.lon);

          return `El clima de ${direccion} es de ${clima} cº.`; 
     
     }catch(error){
         return `No se pudo determinar el clima de ${direccion}.`; 
     }     
}

module.exports = {
     getClima,
     getInfo
}