import { ThemeProvider } from '../@/components/theme-provider';
import Timer from './components/Timer';
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
						<Timer />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;

// TODO:
// Fix logic for rest countdown -- elapsed time used for computation should be reset when resuming after a break
// Fix color scheme from Adobe Color
// Add transition animations
// Add confirmation dialog for Stop session
// Add background gradient animation on start session
// Add beeping sounds for when rest countdown has completed
// Add beeping sound for start timer
