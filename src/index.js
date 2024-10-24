import './style.css';
import { getClientLocation } from './get-user-location';
import { toggleSlideIn } from './toggle-slide-effect';
import { updateWeatherUi } from './update-weather-ui';

const locationInput = document.getElementById('location');
const periodInput = document.getElementById('period');
const toggleWeatherReport = document.querySelector('.toggle-weather-report');
const searchBar = document.getElementById('search-bar');

document.addEventListener('DOMContentLoaded', getClientLocation);

locationInput.addEventListener('focus', toggleSlideIn);
locationInput.addEventListener('blur', toggleSlideIn);

periodInput.addEventListener('focus', toggleSlideIn);
periodInput.addEventListener('blur', toggleSlideIn);

toggleWeatherReport.addEventListener('click', toggleSlideIn);

searchBar.addEventListener('submit', (e) => {
	let location = locationInput.value;
	let period = periodInput.value;

	if (period.trim() == '') period = undefined;

	updateWeatherUi(e, location, period);
});
