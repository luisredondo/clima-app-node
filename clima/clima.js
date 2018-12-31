const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=a4b1003037863b6f6a83bb745cd6a138`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}