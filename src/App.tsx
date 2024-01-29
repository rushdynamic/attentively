import { ThemeProvider } from '../@/components/theme-provider';
import StopWatch from './components/StopWatch';
import './App.css';

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="h-screen w-screen bg-zinc-950">
				<div className="p-3">
					<span className="font-semibold">Attentively</span>
				</div>
				<div className="h-full flex justify-center items-center">
					<div className="flex flex-col items-center">
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
// Fix color scheme from Adobe Color
