const alertContainer = document.getElementById('alert-container');

const alert = (forecast) => {
	//eslint-disable-next-line no-unused-vars
	const [button, ...alertNodes] = [...alertContainer.children];

	alertNodes.map((alert) => {
		alertContainer.removeChild(alert);
	});

	if (forecast.alerts.length == 0) {
		const noAlert = document.createElement('p');

		noAlert.textContent =
			'No alerts at the moment! Enjoy the weather outside!';
		noAlert.classList.toggle('no-alert-msg');

		alertContainer.appendChild(noAlert);

		return;
	}

	for (let i = 0; i < forecast.alerts.length; i++) {
		const event = document.createElement('h1');
		const headline = document.createElement('h2');

		event.textContent = forecast.alerts[i].event;
		headline.textContent = forecast.alerts[i].headline;

		alertContainer.appendChild(event);
		alertContainer.appendChild(headline);

		let description = forecast.alerts[i].description.split('* ');

		for (let j = 1; j < description.length; j++) {
			const descriptionContainer = document.createElement('div');
			const eventDescription = document.createElement('p');

			const test = description[j].split('...');

			descriptionContainer.textContent = test[0] + ': ';
			eventDescription.textContent = test[1];

			descriptionContainer.appendChild(eventDescription);
			alertContainer.appendChild(descriptionContainer);
		}
	}
};

export { alert };
