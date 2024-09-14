async function getWeatherInfo(
	location = 'San Francisco,CA',
	dynamicPeriod = 7,
) {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next${dynamicPeriod}days?key=7F8THCGZG9XFKDJDYCETYAEUG`,
		{ mode: 'cors' },
	);

	const forecast = await response.json();
}

export { getWeatherInfo };
