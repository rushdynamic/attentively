import { useState, useEffect } from 'react';

function useCountdown(isPaused: boolean, elapsedTime: number) {
	const [remainingTime, setRemainingTime] = useState<number>(0);
	const [intervalId, setIntervalId] = useState<number | any>(null);

	const updateCountdown = (countdownTime: number) => {
		const currentTime = new Date().getTime();
		setRemainingTime(countdownTime - currentTime);
	};

	const startCountdown = () => {
		const countdownTime = new Date().getTime() + elapsedTime / 5;
		const stopInterval = setInterval(
			updateCountdown.bind(null, countdownTime),
			1000
		);
		setIntervalId(stopInterval);
	};

	const stopCountdown = () => {
		clearInterval(intervalId);
		setRemainingTime(0);
	};

	useEffect(() => {
		if (intervalId && (remainingTime < 0 || !isPaused)) {
			stopCountdown();
		}
	}, [remainingTime, isPaused]);

	return { startCountdown, stopCountdown, remainingTime };
}

export { useCountdown };
