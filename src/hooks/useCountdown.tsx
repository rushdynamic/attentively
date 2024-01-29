import { useState, useEffect } from 'react';
import { formatTime } from '../utils/time_formatter';

function useCountdown(isPaused: boolean, elapsedTime: number) {
	const [remainingTime, setRemainingTime] = useState<number>(0);
	const [intervalId, setIntervalId] = useState<number | any>(null);

	const updateCountdown = (countdownTime: number) => {
		const currentTime = new Date().getTime();
		console.log('COUNTDOWN TIME:' + countdownTime);
		console.log('REMAINING TIME:' + (currentTime - countdownTime));
		setRemainingTime(currentTime - countdownTime);
	};

	const startCountdown = () => {
		// elapsedTime = new Date().getTime() - elapsedTime / 5;
		const countdownTime = new Date().getTime() - elapsedTime / 5;
		console.log('COUNTDOWN TIME:' + countdownTime);

		const stopInterval = setInterval(
			updateCountdown.bind(null, countdownTime),
			1000
		);
		setIntervalId(stopInterval);
	};

	useEffect(() => {
		if (intervalId && (remainingTime < 0 || !isPaused)) {
			clearInterval(intervalId);
		}
	}, []);

	return { startCountdown, remainingTime };
}

export { useCountdown };
