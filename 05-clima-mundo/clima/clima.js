const axios = require('axios')

const getClima = async(lat, lng) => {

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=152798c14559292a776cb26b1956484f`);

	return resp.data.main.temp;
}

module.exports = {
	getClima
}