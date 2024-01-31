import { Button } from '../../@/components/ui/button';
import { motion } from 'framer-motion';
import { useStopWatch } from '../hooks/useStopWatch';
import { useCountdown } from '../hooks/useCountdown';
import { formatTime } from '../utils/time_formatter';
import ConfirmationDialog from './common/ConfirmationDialog';
import Loader from './common/Loader';

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
				<motion.div
					className="-my-[50px]"
					animate={{ y: 50 }}
					transition={{ type: 'spring', stiffness: 100 }}
				>
					<Button variant="default" onClick={startStopWatch}>
						Start session
					</Button>
				</motion.div>
			);
	} else
		return (
			<motion.div
				className="flex items-center gap-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<Button variant="outline" onClick={pauseStopWatch}>
					Take a break
				</Button>
				<ConfirmationDialog
					dialogTitle="Are you sure?"
					dialogDescription="Your total session time will be reset once you end this session."
					dialogSubText="If you're not logged in, your progress will not be tracked."
					onConfirm={stopStopWatch}
				>
					<Button variant="destructive">Stop session</Button>
				</ConfirmationDialog>
			</motion.div>
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
	const { startCountdown, remainingTime, isCountdownLoading } = useCountdown(
		isPaused,
		elapsedTime
	);
	return (
		<div className="flex flex-col items-center">
			{isStopWatchLoading || isCountdownLoading ? (
				<Loader />
			) : (
				<>
					<span className="font-timer text-8xl py-4 text-zinc-50 cursor-default select-none">
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
							}}
						/>
					</div>
				</>
			)}
		</div>
	);
}
