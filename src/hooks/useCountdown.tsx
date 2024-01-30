import { useState, useEffect } from 'react';
import useSound from 'use-sound';

function useCountdown(isPaused: boolean, elapsedTime: number) {
	const [remainingTime, setRemainingTime] = useState<number>(0);
	const [intervalId, setIntervalId] = useState<number | any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [playRestOverSound] = useSound('sound/rest-over.mp3');

	const updateCountdown = (countdownTime: number) => {
		const currentTime = new Date().getTime();
		setRemainingTime(countdownTime - currentTime);
		setIsLoading(false);
	};

	const startCountdown = () => {
		setIsLoading(true);
		const countdownTime = new Date().getTime() + elapsedTime / 5;
		const stopInterval = setInterval(
			updateCountdown.bind(null, countdownTime),
			1000
		);
		setIntervalId(stopInterval);
	};

	const stopCountdown = () => {
		clearInterval(intervalId);
		setIntervalId(null);
		setRemainingTime(0);
		setIsLoading(false);
		playRestOverSound();
	};

	useEffect(() => {
		if (intervalId && (remainingTime < 0 || !isPaused)) {
			stopCountdown();
			console.log('HERE');
		}
	}, [remainingTime, isPaused]);

	return {
		startCountdown,
		stopCountdown,
		remainingTime,
		isCountdownLoading: isLoading,
	};
}

export { useCountdown };
