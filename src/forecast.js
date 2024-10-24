import { HeatBar } from './heat-bar.js';

class Forecast {
	constructor(forecast, captionEl, tableHeadEl, weatherIcons, tBodyEl) {
		this.forecast = forecast;
		this.captionEl = captionEl;
		this.tableHeadEl = tableHeadEl;
		this.weatherIcons = weatherIcons;
		this.tBodyEl = tBodyEl;
	}

	forecastCaption() {
		this.captionEl.textContent = `${this.forecast.days.length} Day Forecast`;
	}

	tableHeader() {
		const tableRow = document.createElement('tr');

		for (let i = 0; i < this.forecast.days.length; i++) {
			const tableHeaderCell = document.createElement('th');
			const [year, month, day] = this.forecast.days[i].datetime.split('-');
			const date = new Date(`${month}-${day}-${year}`);
			const options = { weekday: 'long', timeZone: this.forecast.timezone };
			const dayName = new Intl.DateTimeFormat('en-US', options).format(date);

			tableHeaderCell.textContent = dayName;

			if (i == 0) tableHeaderCell.textContent = 'Today';

			tableRow.appendChild(tableHeaderCell);
		}

		this.tableHeadEl.appendChild(tableRow);
	}

	weatherIcon() {
		const tr = document.createElement('tr');

		for (let i = 0; i < this.forecast.days.length; i++) {
			const td = document.createElement('td');
			const img = document.createElement('img');

			img.src = this.weatherIcons[`${this.forecast.days[i].icon}`].svg;
			img.setAttribute(
				'alt',
				this.weatherIcons[`${this.forecast.days[i].icon}`].alt,
			);

			td.appendChild(img);
			tr.appendChild(td);
		}

		tr.classList.add('icon');

		this.tBodyEl.appendChild(tr);
	}

	heatBar() {
		const heatBarContainer = document.createElement('tr');

		heatBarContainer.classList.toggle('heat-bar-container');

		for (let i = 0; i < this.forecast.days.length; i++) {
			const td = document.createElement('td');
			const layout = document.createElement('div');
			const lowTemp = document.createElement('div');
			const heatBar = document.createElement('div');
			const highTemp = document.createElement('div');

			const { lowTemp: lowTemperature, highTemp: highTemperature } =
				HeatBar.meetTempRange(
					this.forecast.days[i].tempmin,
					this.forecast.days[i].tempmax,
				);

			const heatMap = new HeatBar(
				lowTemperature,
				highTemperature,
				this.forecast.days[i].tempmin,
				this.forecast.days[i].tempmax,
				this.forecast.currentConditions.temp,
			);

			layout.classList.toggle('flex-align-center');
			lowTemp.classList.toggle('low-temp');
			heatBar.classList.toggle('heat-bar');
			highTemp.classList.toggle('high-temp');

			heatBar.style.background = heatMap.linearGradient();

			if (i == 0) {
				const heatBarPosition = document.createElement('div');

				heatBarPosition.classList.toggle('current-temp-position');
				heatBarPosition.style.left = `calc(${heatMap.currentPosition()}% - 9px)`;

				heatBar.appendChild(heatBarPosition);
			}

			lowTemp.textContent = `${Math.round(this.forecast.days[i].tempmin)}°`;
			highTemp.textContent = `${Math.round(this.forecast.days[i].tempmax)}°`;

			layout.appendChild(lowTemp);
			layout.appendChild(heatBar);
			layout.appendChild(highTemp);
			td.appendChild(layout);
			heatBarContainer.appendChild(td);
		}

		this.tBodyEl.appendChild(heatBarContainer);
	}
}

export { Forecast };
