const formatTime = (elapsedTime: number) => {
	const seconds = Math.floor(elapsedTime / 1000) % 60;
	const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
	const hours = Math.floor(elapsedTime / 1000 / 60 / 60);

	return (
		(hours > 0 ? hours + 'h ' : '') +
		(minutes > 0 ? minutes + 'm ' : '') +
		seconds +
		's'
	);
};

export { formatTime };
