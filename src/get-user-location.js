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
	navigator.geolocation
		? navigator.geolocation.getCurrentPosition(getClientCoordinates, () => {
				updateWeatherUi({ type: 'DOMContentLoaded' }, undefined, undefined);
			})
		: updateWeatherUi({ type: 'DOMContentLoaded' }, undefined, undefined);
};

export { getClientLocation };
