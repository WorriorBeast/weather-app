class QuickOverview {
	constructor(forecast, parentEl, weatherIcons, imgEl) {
		this.forecast = forecast;
		this.parentEl = parentEl;
		this.weatherIcons = weatherIcons;
		this.imgEl = imgEl;
	}

	location() {
		const location = document.createElement('h1');

		location.classList.add('location');

		location.textContent = this.forecast.resolvedAddress;

		this.parentEl.appendChild(location);
	}

	temperature() {
		const temperature = document.createElement('span');

		temperature.classList.add('temperature');

		temperature.textContent = `${Math.round(this.forecast.currentConditions.temp)}°`;

		this.parentEl.appendChild(temperature);
	}

	lowHighTemp() {
		const tempRange = document.createElement('p');
		const tempMin = Math.round(this.forecast.days[0].tempmin);
		const tempMax = Math.round(this.forecast.days[0].tempmax);

		tempRange.classList.add('low-high-temp');

		tempRange.textContent = `${tempMin}° - ${tempMax}°`;

		this.parentEl.appendChild(tempRange);
	}

	feelsLike() {
		const feelsLikeTemp = document.createElement('p');

		feelsLikeTemp.classList.toggle('feels-like');

		feelsLikeTemp.textContent = `Feels like ${Math.round(this.forecast.currentConditions.feelslike)}°`;

		this.parentEl.appendChild(feelsLikeTemp);
	}

	description() {
		const description = document.createElement('p');

		description.classList.add('current-description');

		description.textContent = this.forecast.description;

		this.parentEl.appendChild(description);
	}

	weatherIcon() {
		this.imgEl.src =
			this.weatherIcons[`${this.forecast.currentConditions.icon}`].svg;
		this.imgEl.setAttribute(
			'alt',
			this.weatherIcons[`${this.forecast.currentConditions.icon}`].alt,
		);
	}
}

export { QuickOverview };
