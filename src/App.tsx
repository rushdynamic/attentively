import StopWatch from './components/StopWatch';
import './App.css';

function App() {
	return (
		<div className="h-screen w-screen bg-gray-600 flex items-center justify-center">
			<div className="flex flex-col items-center">
				<span className="font-semibold text-xl text-gray-400">Flowmodoro</span>
				<div className="font-semibold text-6xl">
					<StopWatch />
				</div>
			</div>
		</div>
	);
}

export default App;

// TODO:
// Add buttons for - Start Session (start timer), Take Break -- compute countdown with 1/5 of elapsed time, Stop Session -- reset everything
// Add Shadcn components
// Use monospace font for timer
// Fix color scheme from Adobe Color
