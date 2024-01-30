import { Button } from '../../@/components/ui/button';
import { useStopWatch } from '../hooks/useStopWatch';
import { useCountdown } from '../hooks/useCountdown';
import { formatTime } from '../utils/time_formatter';
import Loader from './Loader';

type stopWatchButtonsType = {
	isPaused: boolean;
	elapsedTime: number;
	startStopWatch: () => void;
	stopStopWatch: () => void;
	pauseStopWatch: () => void;
	resumeStopWatch: () => void;
};
const StopWatchButtons = ({
	isPaused,
	elapsedTime,
	startStopWatch,
	stopStopWatch,
	pauseStopWatch,
	resumeStopWatch,
}: stopWatchButtonsType) => {
	if (elapsedTime == 0 || isPaused) {
		if (isPaused)
			return (
				<Button variant="default" onClick={resumeStopWatch}>
					Resume session
				</Button>
			);
		else
			return (
				<Button variant="default" onClick={startStopWatch}>
					Start session
				</Button>
			);
	} else
		return (
			<div className="flex items-center gap-2">
				<Button variant="outline" onClick={pauseStopWatch}>
					Take a break
				</Button>
				<Button variant="destructive" onClick={stopStopWatch}>
					Stop session
				</Button>
			</div>
		);
};

export default function Timer() {
	const {
		elapsedTime,
		sessionElapsedTime,
		startStopWatch,
		stopStopWatch,
		pauseStopWatch,
		resumeStopWatch,
		isPaused,
		isStopWatchLoading,
	} = useStopWatch();
	const { startCountdown, stopCountdown, remainingTime, isCountdownLoading } =
		useCountdown(isPaused, elapsedTime);
	return (
		<div className="flex flex-col items-center">
			{isStopWatchLoading || isCountdownLoading ? (
				<Loader />
			) : (
				<>
					<span className="font-timer text-6xl py-4 text-zinc-50 cursor-default select-none">
						{isPaused ? formatTime(remainingTime) : formatTime(elapsedTime)}
					</span>
					{sessionElapsedTime != 0 ? (
						<span className="pb-2 text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">
							Total: {formatTime(sessionElapsedTime)}
						</span>
					) : (
						<></>
					)}
					<div>
						<StopWatchButtons
							isPaused={isPaused}
							elapsedTime={elapsedTime}
							startStopWatch={startStopWatch}
							stopStopWatch={stopStopWatch}
							pauseStopWatch={() => {
								pauseStopWatch();
								startCountdown();
							}}
							resumeStopWatch={() => {
								resumeStopWatch();
								stopCountdown();
							}}
						/>
					</div>
				</>
			)}
		</div>
	);
}
