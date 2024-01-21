import { useState, useEffect } from 'react';
import { formatTime } from '../utils/time_formatter';

const useStopWatch = () => {
	const [elapsedTime, setElapsedTime] = useState<number>(0);
	let stopWatchInterval: any = null;

	useEffect(() => {
		startStopWatch();

		return () => {
			stopStopWatch();
		};
	}, []);

	const updateStopWatch = (startTime: number) => {
		const currentTime = new Date().getTime();
		setElapsedTime(currentTime - startTime);
	};

	const startStopWatch = () => {
		if (!stopWatchInterval) {
			const startTime = new Date().getTime();
			const partialUpdateStopWatch = updateStopWatch.bind(null, startTime);
			stopWatchInterval = setInterval(partialUpdateStopWatch, 1000);
		}
	};

	const stopStopWatch = () => {
		clearInterval(stopWatchInterval);
		stopWatchInterval = null;
	};

	return {
		elapsedTime: formatTime(elapsedTime),
		startStopWatch,
		stopStopWatch,
	};
};

export default function StopWatch() {
	const { elapsedTime, startStopWatch, stopStopWatch } = useStopWatch();
	return <div>{elapsedTime}</div>;
}
