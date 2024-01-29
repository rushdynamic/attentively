import { useState } from 'react';

const useStopWatch = () => {
	const [elapsedTime, setElapsedTime] = useState<number>(0);
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const [intervalId, setIntervalId] = useState<number | any>(null);

	const updateStopWatch = (startTime: any) => {
		const currentTime = new Date().getTime() + 30 * 1000;
		setElapsedTime(currentTime - startTime);
	};

	const startStopWatch = () => {
		if (!intervalId) {
			const stopInterval = setInterval(
				updateStopWatch.bind(null, new Date().getTime()),
				1000
			);
			setIntervalId(stopInterval);
		}
	};

	const stopStopWatch = () => {
		clearInterval(intervalId);
		setIntervalId(null);

		// Store stats here
		setElapsedTime(0);
	};

	const pauseStopWatch = () => {
		clearInterval(intervalId);
		setIsPaused(true);
	};

	const resumeStopWatch = () => {
		setIsPaused(false);
		const stopInterval = setInterval(
			updateStopWatch.bind(null, new Date().getTime() - elapsedTime),
			1000
		);
		setIntervalId(stopInterval);
	};

	return {
		elapsedTime,
		startStopWatch,
		stopStopWatch,
		pauseStopWatch,
		resumeStopWatch,
		isPaused,
	};
};

export { useStopWatch };
