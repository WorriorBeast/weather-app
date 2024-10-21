export function removeAllChildren(parentElArray) {
	parentElArray.map((parentEl) => {
		while (parentEl.lastChild !== null) {
			parentEl.removeChild(parentEl.lastChild);
		}
	});
}
