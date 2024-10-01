function toggleSlideIn() {
	const locationInput = document.getElementById('location');
	const periodInput = document.getElementById('period');

	if (this == locationInput || this == periodInput) {
		this.closest('.search-bar-container').classList.toggle('slide-in');
		return;
	}
}

export { toggleSlideIn };
