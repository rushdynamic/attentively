import { ThemeProvider } from '../@/components/theme-provider';
import StopWatch from './components/StopWatch';
import './App.css';

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="h-screen w-screen bg-zinc-950 flex items-center justify-center">
				<div className="flex flex-col items-center">
					<span className="font-semibold text-xl text-gray-400">
						Flowmodoro
					</span>
					<div>
						<StopWatch />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;

// TODO:
// Add buttons for - Start Session (start timer), Take Break -- compute countdown with 1/5 of elapsed time, Stop Session -- reset everything
// Add Shadcn components
// Fix color scheme from Adobe Color
