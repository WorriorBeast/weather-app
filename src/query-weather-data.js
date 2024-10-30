import { openLoadingScreen, closeLoadingScreen } from './loading-screen';

const error = document.getElementById('error-msg');
const locationInput = document.getElementById('search-bar');

async function getWeatherInfo(
	location = 'San Francisco,CA',
	dynamicPeriod = 7,
) {
	openLoadingScreen();

	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next${dynamicPeriod - 1}days?key=7F8THCGZG9XFKDJDYCETYAEUG`,
		{ mode: 'cors' },
	);

	if (response.status == 200) {
		errorMsg('');

		locationInput.classList.remove('error');
	} else if (response.status == 400) {
		closeLoadingScreen();

		errorMsg('Invalid location');

		locationInput.classList.add('error');
	} else if (response.status == 500) {
		closeLoadingScreen();

		errorMsg(
			'Unfortunately an internal server error has occurred. Try again later',
		);

		locationInput.classList.add('error');
	} else if (response.status !== 200) {
		closeLoadingScreen();

		errorMsg('An unexpected error occurred. Please try again');

		locationInput.classList.add('error');
	}

	const forecast = await response.json();

	return forecast;
}

const errorMsg = (msg) => {
	error.textContent = msg;
};

export { getWeatherInfo };
