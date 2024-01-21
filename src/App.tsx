import StopWatch from './components/StopWatch';
import './App.css';

function App() {
	return (
		<div className="h-screen w-screen bg-gray-600 flex items-center justify-center">
			<div className="flex flex-col items-center">
				<span className="font-semibold text-xl text-gray-400">Flowmodoro</span>
				<div className="font-semibold text-6xl">
					<p>
						<StopWatch />
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
