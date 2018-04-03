import axios from 'axios';

const API_KEY = 'd7a008bceee2b1752d11b1c96db830ea';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

	const  url = `${ROOT_URL}&q=${city},pe`;
	const request = axios.get(url);


	return{

		type:FETCH_WEATHER,
		payload: request
	};
}