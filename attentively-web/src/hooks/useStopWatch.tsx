import { useState } from 'react';
import { useToast } from '../../@/components/ui/use-toast';
import useSound from 'use-sound';
import { formatTime } from '../utils/time_formatter';
import useLocalStorage from './useLocalStorage';

const useStopWatch = () => {
	/*
	`sessionElapsedTime` stores the total time for the session and will initially be 0 until the first break.
	Once the first break is over, `sessionElapsedTime` will be updated in real-time with the current elapsed time.
	`completedSessionTime` is used for this computation, as it stores the last completed session.
	*/
	const [sessionElapsedTime, setSessionElapsedTime] = useState<number>(0);
	const [completedSessionTime, setCompletedSessionTime] = useState<number>(0);
	const [elapsedTime, setElapsedTime] = useState<number>(0);
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const [intervalId, setIntervalId] = useState<number | any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { toast } = useToast();
	const [playStartSound] = useSound('sound/start-timer.mp3');
	const [playStopSound] = useSound('sound/stop-timer.mp3');

	const { getLs, upsertLs } = useLocalStorage('stopwatch');

	const updateStopWatch = (startTime: any) => {
		const currentTime = new Date().getTime(); // + 25 * 60 * 1000;
		const _elapsedTime = currentTime - startTime;
		setElapsedTime(_elapsedTime);
		if (sessionElapsedTime != 0) {
			setSessionElapsedTime(completedSessionTime + _elapsedTime);
		}
		setIsLoading(false);
	};

	const startStopWatch = () => {
		const startTime = new Date().getTime();
		setIsLoading(true);
		if (!intervalId) {
			const stopInterval = setInterval(
				updateStopWatch.bind(null, startTime),
				1000
			);
			setIntervalId(stopInterval);
		}
		playStartSound();
	};

	const stopStopWatch = () => {
		clearInterval(intervalId);
		setIntervalId(null);
		playStopSound();
		const currentSessionTotalTime =
			0 == sessionElapsedTime ? elapsedTime : sessionElapsedTime;

		// write session total to local-storage
		upsertLs(null, currentSessionTotalTime);

		// show toast with today's total focused time
		const todaySessionTotalTime = Number(getLs());
		toast({
			title: 'Session complete',
			description:
				'You were focused today for a total of ' +
				formatTime(todaySessionTotalTime),
		});

		setElapsedTime(0);
		setSessionElapsedTime(0);
		setCompletedSessionTime(0);
		setIsLoading(false);
	};

	const pauseStopWatch = () => {
		clearInterval(intervalId);
		setIsPaused(true);
		setSessionElapsedTime(completedSessionTime + elapsedTime);
		setCompletedSessionTime(
			(curCompletedSessionTime) => curCompletedSessionTime + elapsedTime
		);
		setElapsedTime(0);
	};

	const resumeStopWatch = () => {
		setIsPaused(false);
		setIsLoading(true);
		const stopInterval = setInterval(
			updateStopWatch.bind(null, new Date().getTime() - elapsedTime),
			1000
		);
		setIntervalId(stopInterval);
		playStartSound();
	};

	return {
		elapsedTime,
		sessionElapsedTime,
		startStopWatch,
		stopStopWatch,
		pauseStopWatch,
		resumeStopWatch,
		isPaused,
		isStopWatchLoading: isLoading,
	};
};

export { useStopWatch };
