import { ThemeProvider } from '../@/components/theme-provider';
import { motion } from 'framer-motion';
import Timer from './components/Timer';
import './App.css';

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="h-screen w-screen bg-zinc-950 bg-noise-pattern">
				<motion.div
					className="p-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<span className="font-semibold select-none cursor-default text-zinc-300 hover:text-zinc-50 transition-colors">
						Attentively
					</span>
				</motion.div>
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
// Fix color scheme from Adobe Color
// Add background gradient animation on start session
// Add beeping sounds for when rest countdown has completed
// Add beeping sound for start timer
