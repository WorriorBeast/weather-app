import { getWeatherInfo } from './query-weather-data';

const getClientCoordinates = (position) => {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;

	getWeatherInfo(latitude + ', ' + longitude);
};

const getClientLocation = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			getClientCoordinates,
			getWeatherInfo,
		);
	} else {
		getWeatherInfo();
	}
};

export { getClientLocation };
