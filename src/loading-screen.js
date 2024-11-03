const dialog = document.getElementById('loading-screen');
const letters = [...dialog.children];
const length = letters.length;

const openLoadingScreen = () => {
	dialog.showModal();

	dialog.style.display = 'flex';

	animateLoadingScreen();
};

const closeLoadingScreen = () => {
	dialog.removeAttribute('style');

	dialog.close();
};

const animateLoadingScreen = () => {
	let upCurrentIndex = 0;
	let upDelay = 0;
	let downCurrentIndex = 0;
	let downDelay = 1000;
	let startAnimationDelay = 0;

	const animateUp = () => {
		if (upDelay == 0) {
			const id = setTimeout(() => {
				letters[upCurrentIndex].classList.add(
					`animate-up-${upCurrentIndex + 1}`,
				);

				upDelay = 200;
				upCurrentIndex++;

				animateUp();
				clearInterval(id);
			}, upDelay);
		} else {
			const id = setInterval(() => {
				letters[upCurrentIndex].classList.add(
					`animate-up-${upCurrentIndex + 1}`,
				);

				if (upCurrentIndex + 1 == length) {
					upDelay = 0;
					upCurrentIndex = 0;
					clearInterval(id);
				}

				upCurrentIndex++;
			}, upDelay);
		}
	};

	const animateDown = () => {
		if (downDelay == 1000) {
			const id = setTimeout(() => {
				letters[downCurrentIndex].classList.remove(
					`animate-up-${downCurrentIndex + 1}`,
				);

				downDelay = 200;
				downCurrentIndex++;

				animateDown();
				clearInterval(id);
			}, downDelay);
		} else {
			const id = setInterval(() => {
				letters[downCurrentIndex].classList.remove(
					`animate-up-${downCurrentIndex + 1}`,
				);

				if (downCurrentIndex + 1 == length) {
					downDelay = 1000;
					downCurrentIndex = 0;
					clearInterval(id);
				}

				downCurrentIndex++;
			}, downDelay);
		}
	};

	const startAnimation = () => {
		if (startAnimationDelay == 0) {
			const id = setTimeout(() => {
				startAnimationDelay = 4000;
				upCurrentIndex = 0;
				downCurrentIndex = 0;
				upDelay = 0;
				downDelay = 1000;

				animateUp();
				animateDown();

				startAnimation();

				if (!dialog.open) {
					clearInterval(id);
				}

				clearInterval(id);
			}, startAnimationDelay);
		} else {
			const id = setInterval(() => {
				upCurrentIndex = 0;
				downCurrentIndex = 0;
				upDelay = 0;
				downDelay = 1000;

				animateUp();
				animateDown();

				if (!dialog.open) {
					clearInterval(id);
					startAnimationDelay = 0;
				}
			}, startAnimationDelay);
		}
	};

	startAnimation();
};

export { openLoadingScreen, closeLoadingScreen };
