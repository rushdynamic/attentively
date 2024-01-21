import StopWatch from './components/StopWatch';

function App() {
	return (
		<div className="h-full w-full flex items-center justify-center">
			<h1>Flowmodoro</h1>
			<div className="card">
				<p>
					<StopWatch />
				</p>
			</div>
		</div>
	);
}

export default App;
