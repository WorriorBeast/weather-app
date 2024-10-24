class WeatherReport {
	static hours = 24;

	constructor(forecast, tableEl) {
		this.forecast = forecast;
		this.tableEl = tableEl;
	}

	caption() {
		const caption = document.createElement('caption');

		caption.textContent = `${WeatherReport.hours} Hour Weather Report`;
		caption.classList.toggle('breakdown-caption');

		this.tableEl.appendChild(caption);
	}

	tHead() {
		const tHead = document.createElement('thead');
		const squared = String.fromCharCode(0x00b2);

		const headers = [
			'hour',
			'temp. (°F)',
			'cloud cover (%)',
			'pressure (mb)',
			'uv index (0-10)',
			'humidity (%)',
			'visibility (miles)',
			'precip. (inches)',
			'dew (°F)',
			'snow (inches)',
			'snow depth (inches)',
			`solar energy (MJ/m${squared})`,
			`solar radiation (W/m${squared})`,
			'wind speed (mph)',
			'wind gust (mph)',
			'wind direction (deg)',
		];

		for (let i = 0; i < headers.length; i++) {
			const th = document.createElement('th');

			th.textContent = headers[i];
			th.setAttribute('scope', 'col');

			tHead.appendChild(th);
		}

		tHead.classList.toggle('data-elements');
		this.tableEl.appendChild(tHead);
	}

	tBody() {
		const tBody = document.createElement('tbody');

		let standardTime = null;
		let [currentHour] = this.forecast.currentConditions.datetime.split(':');
		let dayNumber = 0;

		const weatherProperties = [
			'temp',
			'cloudcover',
			'pressure',
			'uvindex',
			'humidity',
			'visibility',
			'precip',
			'dew',
			'snow',
			'snowdepth',
			'solarenergy',
			'solarradiation',
			'windspeed',
			'windgust',
			'winddir',
		];

		currentHour = Number(currentHour);

		for (let i = 0; i < WeatherReport.hours; i++) {
			if (currentHour == WeatherReport.hours) {
				dayNumber = 1;
				currentHour = 0;
			}

			if (currentHour > 12 && currentHour < 24) {
				standardTime = currentHour - 12 + 'pm';
			} else if (currentHour > 0 && currentHour < 12) {
				standardTime = currentHour + 'am';
			} else if (currentHour == 0) {
				standardTime = '12am';
			} else {
				standardTime = '12pm';
			}

			const hour = this.forecast.days[dayNumber].hours[currentHour];

			const tr = document.createElement('tr');
			const td = document.createElement('td');

			td.textContent = standardTime;

			tr.appendChild(td);

			weatherProperties.map((prop) => {
				const td = document.createElement('td');

				td.textContent = Math.round(hour[prop]);

				tr.appendChild(td);
			});

			currentHour++;

			tBody.appendChild(tr);
		}

		tBody.classList.toggle('weather-data');
		this.tableEl.appendChild(tBody);
	}
}

export { WeatherReport };
