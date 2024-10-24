class HeatBar {
	static precision = 10;
	static minTemp = -20;
	static maxTemp = 105;

	constructor(
		lowTemp,
		highTemp,
		originalLowTemp,
		originalHighTemp,
		currentTemp,
	) {
		this.lowTemp = lowTemp;
		this.highTemp = highTemp;
		this.originalLowTemp = originalLowTemp;
		this.originalHighTemp = originalHighTemp;
		this.currentTemp = currentTemp;
	}

	static meetTempRange(lowTemp, highTemp) {
		if (
			lowTemp == highTemp &&
			lowTemp < HeatBar.minTemp &&
			highTemp < HeatBar.minTemp
		) {
			lowTemp = HeatBar.minTemp;
			highTemp = HeatBar.minTemp;
		} else if (
			highTemp == lowTemp &&
			highTemp > HeatBar.maxTemp &&
			lowTemp > HeatBar.maxTemp
		) {
			highTemp = HeatBar.maxTemp;
			lowTemp = HeatBar.maxTemp;
		} else if (lowTemp < HeatBar.minTemp && highTemp < HeatBar.minTemp) {
			lowTemp = HeatBar.minTemp;
			highTemp = HeatBar.minTemp + 1;
		} else if (highTemp > HeatBar.maxTemp && lowTemp > HeatBar.maxTemp) {
			highTemp = HeatBar.maxTemp;
			lowTemp = HeatBar.maxTemp - 1;
		} else if (highTemp > HeatBar.maxTemp) {
			highTemp = HeatBar.maxTemp;
		} else if (lowTemp < HeatBar.minTemp) {
			lowTemp = HeatBar.minTemp;
		}

		return { lowTemp, highTemp };
	}

	static fahrenheitToHSL(fahrenheit) {
		const normalizedTemp =
			(fahrenheit - HeatBar.minTemp) / (HeatBar.maxTemp - HeatBar.minTemp);

		let h = Number(((1.0 - normalizedTemp) * 240).toFixed(4));

		return `hsl(${h}, 100%, 50%)`;
	}

	linearGradient() {
		const leftToRight = '0.25turn';
		const tempDiff = this.highTemp - this.lowTemp;
		let dynamicInc = tempDiff / HeatBar.precision;
		let hslColors = [];

		if (tempDiff == 0) {
			return `${HeatBar.fahrenheitToHSL(this.lowTemp)}`;
		}

		for (let i = dynamicInc; i <= tempDiff; i += dynamicInc) {
			hslColors.push(HeatBar.fahrenheitToHSL(this.lowTemp + i));
		}

		return `linear-gradient(${leftToRight}, ${hslColors.join(',')})`;
	}

	currentPosition() {
		const currentTempRangeDiff = this.originalHighTemp - this.originalLowTemp;
		const lowToCurrentTempDiff = this.currentTemp - this.originalLowTemp;
		const percent = (
			(lowToCurrentTempDiff / currentTempRangeDiff) *
			100
		).toFixed(4);

		return percent;
	}
}

export { HeatBar };
