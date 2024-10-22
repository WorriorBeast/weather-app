import { getWeatherInfo } from './query-weather-data';
import { QuickOverview } from './quick-overview';
import { classMethodIterator } from './class-method-iterator';
import { removeAllChildren } from './remove-all-children';
import { weatherIcons } from './weather-icons';

const searchBar = document.getElementById('search-bar');

async function updateWeatherUi(e, locationInput, periodInput) {
	const currentWeatherContainer = document.querySelector('.current-weather');
	const heroIconEl = document.querySelector('.quick-overview img');

	if (e.type !== 'DOMContentLoaded') e.preventDefault();

	const forecastData = await getWeatherInfo(locationInput, periodInput);

	const parents = [currentWeatherContainer];

	const updateWeatherUi = [
		new QuickOverview(
			forecastData,
			currentWeatherContainer,
			weatherIcons,
			heroIconEl,
		),
	];

	removeAllChildren(parents);

	classMethodIterator(updateWeatherUi);

	searchBar.reset();
}

export { updateWeatherUi };
