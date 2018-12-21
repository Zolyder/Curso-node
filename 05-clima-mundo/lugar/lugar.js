const axios = require('axios');

const getLugarLatLng = async (direccion) => {

	let encodeUrl = encodeURI( direccion );

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM`)

	if(resp.data.status === 'ZERO_RESULTS'){
		throw new Error(`No hay resultados para la ciudad ${ direccion }`);
	} 

	let address = resp.data.results[0]
	let coors = address.geometry.location

	return{
		direccion: address.formatted_address,
		lat: coors.lat,
		lng: coors.lng
	}
}

module.exports = {
	getLugarLatLng
}
