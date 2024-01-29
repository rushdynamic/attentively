import { useState } from 'react';
import { Button } from '../../@/components/ui/button';
import { formatTime } from '../utils/time_formatter';

const useStopWatch = () => {
	const [elapsedTime, setElapsedTime] = useState<number>(0);
	const [paused, setPaused] = useState<boolean>(false);
	const [intervalId, setIntervalId] = useState<number | any>(null);

	const updateStopWatch = (startTime: any) => {
		const currentTime = new Date().getTime();
		setElapsedTime(currentTime - startTime);
	};

	const startStopWatch = () => {
		if (paused) {
			setPaused(false);
			const stopInterval = setInterval(
				updateStopWatch.bind(null, new Date().getTime() - elapsedTime),
				1000
			);
			setIntervalId(stopInterval);
		} else {
			if (!intervalId) {
				const stopInterval = setInterval(
					updateStopWatch.bind(null, new Date().getTime()),
					1000
				);
				setIntervalId(stopInterval);
			}
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
		setPaused(true);
	};

	return {
		elapsedTime,
		startStopWatch,
		stopStopWatch,
		pauseStopWatch,
		paused,
	};
};

export default function StopWatch() {
	const { elapsedTime, startStopWatch, stopStopWatch, pauseStopWatch, paused } =
		useStopWatch();
	return (
		<div className="flex flex-col items-center">
			<span className="font-timer text-6xl py-4 text-zinc-50">
				{formatTime(elapsedTime)}
			</span>
			<div>
				{elapsedTime == 0 || paused ? (
					<Button variant="default" onClick={startStopWatch}>
						{paused ? 'Resume session' : 'Start session'}
					</Button>
				) : (
					<div className="flex items-center gap-2">
						<Button variant="outline" onClick={pauseStopWatch}>
							Take a break
						</Button>
						<Button variant="destructive" onClick={stopStopWatch}>
							Stop session
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
