import { useState } from 'react';
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
			<span className="font-timer text-6xl font-semibold py-4">
				{formatTime(elapsedTime)}
			</span>
			<div>
				{elapsedTime == 0 || paused ? (
					<button
						type="button"
						className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={startStopWatch}
					>
						{paused ? 'Resume session' : 'Start session'}
					</button>
				) : (
					<>
						<button
							className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
							onClick={pauseStopWatch}
						>
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								Take a break
							</span>
						</button>
						<button
							className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
							onClick={stopStopWatch}
						>
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								Stop session
							</span>
						</button>
					</>
				)}
			</div>
		</div>
	);
}
