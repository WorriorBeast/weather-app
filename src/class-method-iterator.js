export function classMethodIterator(classArray) {
	for (let i = 0; i < classArray.length; i++) {
		Object.getOwnPropertyNames(Object.getPrototypeOf(classArray[i]))
			.filter((methodName) => methodName !== 'constructor')
			.map((method) => classArray[i][method]());
	}
}
