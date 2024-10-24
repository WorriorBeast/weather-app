import { getWeatherInfo } from './query-weather-data';
import { QuickOverview } from './quick-overview';
import { classMethodIterator } from './class-method-iterator';
import { removeAllChildren } from './remove-all-children';
import { weatherIcons } from './weather-icons';
import { Forecast } from './forecast';

const searchBar = document.getElementById('search-bar');

async function updateWeatherUi(e, locationInput, periodInput) {
	const currentWeatherContainer = document.querySelector('.current-weather');
	const heroIconEl = document.querySelector('.quick-overview img');
	const forecastCaption = document.querySelector('.forecast-caption');
	const forecastTHead = document.querySelector('#forecast-table .days');
	const forecastTBody = document.querySelector('#forecast-table tbody');

	if (e.type !== 'DOMContentLoaded') e.preventDefault();

	const forecastData = await getWeatherInfo(locationInput, periodInput);

	const parents = [currentWeatherContainer, forecastTHead, forecastTBody];

	const updateWeatherUi = [
		new QuickOverview(
			forecastData,
			currentWeatherContainer,
			weatherIcons,
			heroIconEl,
		),
		new Forecast(
			forecastData,
			forecastCaption,
			forecastTHead,
			weatherIcons,
			forecastTBody,
		),
	];

	removeAllChildren(parents);

	classMethodIterator(updateWeatherUi);

	searchBar.reset();
}

export { updateWeatherUi };
