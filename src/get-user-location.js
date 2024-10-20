import { getWeatherInfo } from './query-weather-data';
import { updateWeatherUi } from './update-weather-ui';

const getClientCoordinates = (position) => {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;

	updateWeatherUi(
		{ type: 'DOMContentLoaded' },
		latitude + ', ' + longitude,
		undefined,
	);
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
