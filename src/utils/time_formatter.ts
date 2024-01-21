const addZeroPadding = (val: number) => {
	if (val < 10) {
		return '0' + val;
	} else return val;
};

const formatTime = (elapsedTime: number) => {
	const seconds = Math.floor(elapsedTime / 1000) % 60;
	const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
	const hours = Math.floor(elapsedTime / 1000 / 60 / 60);

	return (
		addZeroPadding(hours) +
		':' +
		addZeroPadding(minutes) +
		':' +
		addZeroPadding(seconds)
	);
};

export { formatTime };
