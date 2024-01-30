import { ThemeProvider } from '../@/components/theme-provider';
import { Toaster } from '../@/components/ui/toaster';
import Header from './components/Header';
import Timer from './components/Timer';
import './App.css';

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Toaster />
			<div className="h-screen w-screen bg-zinc-950 bg-noise-pattern">
				<Header />
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
// Make web-app responsive
// Add 'Stats' section
// Fix color scheme from Adobe Color
// Add background gradient animation on start session
